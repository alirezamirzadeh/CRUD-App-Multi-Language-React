import LanguageSelect from "./LanguageSelect"
import { useTranslation } from "react-i18next"
import ThemeMode from "./ThemeMode"
import { Link } from "react-router-dom"

export default function Header() {
    const { t } = useTranslation()

    return (
        <header>
            <div className="row">
                <div className="header">
                    <Link to="/"><h1>{t("title")}</h1></Link>
                    <div className="item">
                        <LanguageSelect />
                        <ThemeMode />
                    </div>
                </div>
            </div>
        </header>
    )
}
