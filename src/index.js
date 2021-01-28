import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./utils/i18nextConf"


ReactDOM.render(
    <Suspense fallback="...">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Suspense>,
    document.getElementById("root")
)

