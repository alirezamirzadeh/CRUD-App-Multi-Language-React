import useColorMode from "../hooks/useColorMode"
import DarkMode from "../static/images/dark.svg"
import LightMode from "../static/images/light.svg"

export default function ThemeMode() {
    const [isDark, onHandler] = useColorMode()

    return (
        <img
        className="theme"
            src={isDark ? DarkMode : LightMode}
            onClick={onHandler}
            alt=""
        />
    )
}

