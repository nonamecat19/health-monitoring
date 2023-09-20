import Me from "../../pages/Me"
import {Navigate} from "react-router-dom"
import personsRoutes from "./personRoutes.tsx"
import PATH from "../constants/Path.ts"
import roomsRoutes from "./roomsRoutes.tsx"

const {ROOT, ME, PERSONS, ROOMS, DASHBOARD, ALL, ADMIN} = PATH

const adminRoutes = [
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
        element: <Navigate to={`/${ADMIN}/${ROOMS}/${DASHBOARD}/${ALL}`}/>
    }
]
export default adminRoutes