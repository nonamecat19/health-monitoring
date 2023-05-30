import Me from "../../pages/Me"
import {Navigate} from "react-router-dom"
import personsRoutes from "./personRoutes.tsx"
import PATH from "../constants/Path.ts"
import roomsRoutes from "./roomsRoutes.tsx"

const {ROOT, ME, PERSONS, ROOMS, DASHBOARD, ALL} = PATH

const mainRoutes = [
    {
        path: ROOMS,
        children: roomsRoutes
    },
    {
        path: PERSONS,
        children: personsRoutes
    },
    {
        path: ME,
        element: <Me/>
    },
    {
        path: ROOT,
        element: <Navigate to={`/${ROOMS}/${DASHBOARD}/${ALL}`}/>
    }
]
export default mainRoutes