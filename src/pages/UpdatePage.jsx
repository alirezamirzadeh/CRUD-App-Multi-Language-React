import { useTranslation } from "react-i18next"
import { useCrudAction } from "../context/CrudProvider"
import useForm from "../hooks/useForm"

export default function UpdatePage({ match }) {
    const { t } = useTranslation()
    const { read } = useCrudAction()

    const { state, onHandlerInput, onHandlerSubmit } = useForm(
        read(match.params.id).title,
        match.params.id
    )

    return (
        <section>
            <div className="row">
                <form onSubmit={onHandlerSubmit}>
                    <input
                        onChange={onHandlerInput}
                        value={state}
                    />
                    <button type="submit">{t("update")}</button>
                </form>
            </div>
        </section>
    )
}
