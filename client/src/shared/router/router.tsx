import {createBrowserRouter, Navigate} from 'react-router-dom'
import PATH from "../../shared/constants/Path.ts"
import ConfigSWR from "../components/ConfigSWR.tsx";
import globalRoutes from "./globalRoutes.tsx";

const {ROOT, ANY} = PATH

const router = createBrowserRouter([
        {
            path: ROOT,
            element: <ConfigSWR/>,
            children: globalRoutes
        },
        {
            path: ANY,
            element: <Navigate to={ROOT}/>
        }
    ]
)
export default router