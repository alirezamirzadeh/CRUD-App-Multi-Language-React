import React from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const CrudContext = React.createContext()
const CrudContextSetState = React.createContext()

const key_LocalStorage = "crud"
const INITIAL_STATE = []

export default function CrudProvider({ children }) {
    const [state, setState] = useLocalStorage(
        key_LocalStorage,
        INITIAL_STATE
    )

    return (
        <CrudContext.Provider value={state}>
            <CrudContextSetState.Provider value={setState}>
                {children}
            </CrudContextSetState.Provider>
        </CrudContext.Provider>
    )
}

function useCrudState() {
    return React.useContext(CrudContext)
}

function useCrudSetState() {
    return React.useContext(CrudContextSetState)
}

function useCrudAction() {
    const setState = useCrudSetState()
    const state = useCrudState()

    const create = (item) => {
        setState((prevState) => [...prevState, item])
    }

    const update = (id, item) => {
        setState((prevState) => {
            return prevState.map((state) => {
                if (state.id.toString() === id) {
                    state.title = item
                }
                return state
            })
        })
    }

    const remove = (id) => {
        setState((prevState) =>
            prevState.filter((state) => state.id !== id)
        )
    }

    const read = (id) =>
        state.find((list) => list.id.toString() === id)

    return { create, update, remove, read }
}

export { useCrudState, useCrudSetState, useCrudAction }
