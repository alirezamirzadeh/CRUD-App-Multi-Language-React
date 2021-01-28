import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

const DARK_CLASS = "dark-mode"
const INITIAL_DARK = false

export default function useColorMode() {
    const [isDark, setIsDark] = useLocalStorage(
        DARK_CLASS,
        INITIAL_DARK
    )

    const onHandler = () => {
        isDark ? setIsDark(false) : setIsDark(true)
    }

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add(DARK_CLASS)
        } else {
            document.documentElement.classList.remove(DARK_CLASS)
        }
    }, [isDark])

    return [isDark, onHandler]
}
