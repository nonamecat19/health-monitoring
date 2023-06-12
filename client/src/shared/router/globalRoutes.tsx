import MainLayout from "../../pages/MainLayout"
import Login from "../../pages/Login"
import PATH from "../constants/Path.ts"
import adminRoutes from "./adminRoutes.tsx";
import studentRoutes from "./studentRoutes.tsx";
import {Navigate} from "react-router-dom";

const {LOGIN, STUDENT, ADMIN, ROOT} = PATH

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
    },
    {
        path: ROOT,
        element: <Navigate to={LOGIN}/>
    }
]
export default globalRoutes