import {Me} from "../../pages/Me"
import {Navigate} from "react-router-dom"
import {PATH} from "../constants"
import {personsRoutes} from "./personRoutes.tsx";
import {roomsRoutes} from "./roomsRoutes.tsx";

const {ROOT, ME, PERSONS, ROOMS, DASHBOARD, ALL, ADMIN} = PATH

export const adminRoutes = [
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
