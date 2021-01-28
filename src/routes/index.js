import HomePage from "../pages/HomePage"
import UpdatePage from "../pages/UpdatePage"
import NotFound from "../pages/NotFound"

const routes = [
    {
        exact: true,
        path: "/",
        component: HomePage
    },
    {
        path: "/update/:id",
        component: UpdatePage
    },
    {
        component: NotFound
    }
]

export default routes
