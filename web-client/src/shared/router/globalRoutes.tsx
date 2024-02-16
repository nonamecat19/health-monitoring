import {MainLayout} from "../../pages/MainLayout"
import {PATH} from "../constants"
import {Navigate} from "react-router-dom";
import {studentRoutes} from "./studentRoutes.tsx";
import {adminRoutes} from "./adminRoutes.tsx";
import {Login} from "../../pages/Login";

const {LOGIN, STUDENT, ADMIN, ROOT} = PATH

export const globalRoutes = [
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
