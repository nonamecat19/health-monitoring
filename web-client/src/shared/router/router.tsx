import {createBrowserRouter, Navigate} from 'react-router-dom'
import {PATH} from "../constants"
import {ConfigSWR} from "../components";
import {globalRoutes} from "./globalRoutes.tsx";

const {ROOT, ANY, LOGIN} = PATH

export const router = createBrowserRouter([
    {
      path: ROOT,
      element: <ConfigSWR/>,
      children: globalRoutes
    },
    {
      path: ANY,
      element: <Navigate to={LOGIN}/>
    }
  ]
)
