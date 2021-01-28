import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useCrudAction } from "../context/CrudProvider"

export default function useForm(initial = "", id) {
    const history = useHistory()

    const [state, setState] = useState(initial)
    const { create, update } = useCrudAction()

    const onHandlerInput = (e) => {
        setState(e.target.value)
    }

    const onHandlerSubmit = (e) => {
        e.preventDefault()
        if (id) {
            update(id, state)
            return history.push("/")
        }
        if (state) {
            create({ id: Math.random(), title: state })
        }

        setState("")
    }

    return { state, onHandlerInput, onHandlerSubmit }
}
