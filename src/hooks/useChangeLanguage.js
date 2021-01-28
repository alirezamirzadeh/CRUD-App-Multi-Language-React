import React from "react"
import i18next from "i18next"

const languageMap = {
    en: { label: "English", dir: "ltr", active: true },
    fa: { label: "فارسی", dir: "rtl", active: false }
}

const LanguageSelect = () => {
    const selected = localStorage.getItem("i18nextLng") || "en"

    React.useEffect(() => {
        document.body.dir = languageMap[selected].dir
    }, [selected])

    const onSelect = () => {
        const item = selected === "en" ? "fa" : "en"
        i18next.changeLanguage(item)
        localStorage.setItem("i18nextLng", item)
    }


    return onSelect
}

export default LanguageSelect
