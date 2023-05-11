import {Outlet, createBrowserRouter} from 'react-router-dom'
import MainLayout from '../../pages/MainLayout'
import Login from '../../pages/Login'
import PATH from "../../shared/constants/Path.ts"
import Persons from "../../pages/PersonsList"
import RoomRecords from "../../pages/RoomsRecords"
import PersonRecords from "../../pages/PersonsRecords"
import Rooms from "../../pages/RoomsList"
import RoomsDashboard from "../../pages/RoomsDashboard";
import Me from "../../pages/Me";

const {EMPTY, ROOMS, RECORDS, ALL, ME, ID, LIST, LOGIN, PERSONS, DASHBOARD} = PATH

const router = createBrowserRouter([
        {
            path: EMPTY,
            element: <MainLayout/>,
            children: [
                {
                    path: ROOMS,
                    element: <Outlet/>,
                    children: [
                        {
                            path: LIST,
                            element: <Rooms/>
                        },
                        {
                            path: RECORDS,
                            element: <Outlet/>,
                            children: [
                                {
                                    path: ALL,
                                    element: <RoomRecords/>
                                },
                                {
                                    path: ID,
                                    element: <RoomRecords/>
                                }
                            ]
                        },
                        {
                            path: DASHBOARD,
                            element: <Outlet/>,
                            children: [
                                {
                                    path: ALL,
                                    element: <RoomsDashboard/>
                                },
                                {
                                    path: ID,
                                    element: <>ROOMS/DASHBOARD/ID</>
                                }
                            ]
                        }
                    ]
                },
                {
                    path: PERSONS,
                    element: <Outlet/>,
                    children: [
                        {
                            path: LIST,
                            element: <Persons/>
                        },
                        {
                            path: RECORDS,
                            element: <Outlet/>,
                            children: [
                                {
                                    path: ALL,
                                    element: <PersonRecords/>
                                },
                                {
                                    path: ID,
                                    element: <PersonRecords/>
                                }
                            ]
                        },
                        {
                            path: DASHBOARD,
                            element: <Outlet/>,
                            children: [
                                {
                                    path: ALL,
                                    element: <>PERSONS/DASHBOARD/ALL</>
                                },
                                {
                                    path: ID,
                                    element: <>PERSONS/DASHBOARD/ID</>
                                }
                            ]
                        }
                    ]
                },
                {
                    path: ME,
                    element: <Me/>
                }
            ]
        },
        {
            path: LOGIN,
            element: <Login/>,
        }
    ]
)
export default router