import MainLayout from "../../pages/MainLayout"
import Login from "../../pages/Login"
import PATH from "../constants/Path.ts"
import studentRoutes from "./studentRoutes.tsx";
import adminRoutes from "./adminRoutes.tsx";

const {LOGIN, STUDENT, ADMIN} = PATH

const globalRoutes = [
    {
        path: STUDENT,
        element: <MainLayout type={'student'}/>,
        children: studentRoutes
    },
    {
        path: ADMIN,
        element: <MainLayout type={'admin'}/>,
        children: adminRoutes
    },
    {
        path: LOGIN,
        element: <Login/>,
    }
]
export default globalRoutes