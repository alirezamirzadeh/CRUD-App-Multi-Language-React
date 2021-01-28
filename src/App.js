import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.scss"
import CrudProvider from "./context/CrudProvider"
import Layout from "./layout/index"
import routes from "./routes/index"

const Routes =  routes.map((route) => <Route {...route} />)

function App() {
    return (
        <CrudProvider>
            <BrowserRouter>
                <Layout>
                    <Switch>
                      {Routes}
                    </Switch>
                </Layout>
            </BrowserRouter>
        </CrudProvider>
    ) 
} 

export default App
