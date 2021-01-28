import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { useCrudState } from "../context/CrudProvider"
import Delete from "./Delete"

export default function DisplayCrud() {
    const crud = useCrudState()
    const { t } = useTranslation()

    return (
        <ul>
            {crud.map((item) => (
                <li>
                    <p>{item.title}</p>
                    <div className="btn-box">
                        <Link to={"update/"+ item.id} className="update">
                            {t("update")}
                        </Link>
                        <Delete id={item.id} />
                    </div>
                </li>
            ))}
        </ul>
    )
}
