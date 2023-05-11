import MainLayout from "../../pages/MainLayout"
import Login from "../../pages/Login"
import PATH from "../constants/Path.ts"
import mainRoutes from "./mainRoutes.tsx"

const {ROOT, LOGIN} = PATH

const globalRoutes = [
    {
        path: ROOT,
        element: <MainLayout/>,
        children: mainRoutes
    },
    {
        path: LOGIN,
        element: <Login/>,
    }
]
export default globalRoutes