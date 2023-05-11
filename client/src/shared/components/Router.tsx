import {Route, BrowserRouter, Routes, Outlet} from 'react-router-dom'
import {FC} from 'react'
import MainLayout from '../../pages/MainLayout'
import Login from '../../pages/Login'
import PATH from "../../shared/constants/Path.ts"
import Persons from "../../pages/PersonsList"
import RoomRecords from "../../pages/RoomsRecords"
import PersonRecords from "../../pages/PersonsRecords"
import Rooms from "../../pages/RoomsList"
import RoomsDashboad from "../../pages/RoomsDashboad";
import Me from "../../pages/Me";

const Router: FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={PATH.EMPTY} element={<MainLayout/>}>

                    <Route path={PATH.ROOMS} element={<Outlet/>}>
                        <Route path={PATH.LIST} element={<Rooms/>}/>
                        <Route path={PATH.RECORDS} element={<Outlet/>}>
                            <Route path={PATH.ALL} element={<RoomRecords/>}/>
                            <Route path={PATH.ID} element={<RoomRecords/>}/>
                        </Route>
                        <Route path={PATH.DASHBOARD} element={<Outlet/>}>
                            <Route path={PATH.ALL} element={<RoomsDashboad/>}/>
                            <Route path={PATH.ID} element={<>ROOMS/DASHBOARD/ID</>}/>
                        </Route>
                    </Route>

                    <Route path={PATH.PERSONS} element={<Outlet/>}>
                        <Route path={PATH.LIST} element={<Persons/>}/>
                        <Route path={PATH.RECORDS} element={<Outlet/>}>
                            <Route path={PATH.ALL} element={<PersonRecords/>}/>
                            <Route path={PATH.ID} element={<PersonRecords/>}/>
                        </Route>
                        <Route path={PATH.DASHBOARD} element={<Outlet/>}>
                            <Route path={PATH.ALL} element={<>PERSONS/DASHBOARD/ALL</>}/>
                            <Route path={PATH.ID} element={<>PERSONS/DASHBOARD/ID</>}/>
                        </Route>
                    </Route>
                    <Route path={PATH.ME} element={<Me/>}/>
                    <Route path='/*' element={<div>NO ROUTE FOUND</div>}/>
                </Route>

                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path='/*' element={<div>NO ROUTE FOUND</div>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router