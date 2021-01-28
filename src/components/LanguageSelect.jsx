import React from "react"
import { useTranslation } from "react-i18next"
import useChangeLanguage from "../hooks/useChangeLanguage"

const LanguageSelect = () => {
    const onSelect = useChangeLanguage()
    const { t } = useTranslation()

    return (
        <p className="lang" onClick={onSelect}>
            {t("language")}
        </p>
    )
}

export default LanguageSelect
