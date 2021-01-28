import React from "react"
import { useTranslation } from "react-i18next"

export default function Footer() {
    const { t } = useTranslation()
    return (
        <footer>
            <div className="row">
                <div className="footer">
                    <p> {t("copy-right")} </p> &nbsp; : &nbsp;
                    <a href="http://alirezamirzadeh.ir"> {t("name")} </a>
                </div>
            </div>
        </footer>
    )
}
