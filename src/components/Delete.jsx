import React from "react"
import { useTranslation } from "react-i18next"
import { useCrudAction } from "../context/CrudProvider"

export default function Delete({ id }) {
    const { remove } = useCrudAction()
    const { t } = useTranslation()

    const onDelete = () => {
        remove(id)
    }

    return <button className="delete" onClick={onDelete}>{t("delete")}</button>
}
