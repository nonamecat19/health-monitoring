import {Route, BrowserRouter, Routes, Outlet} from 'react-router-dom'
import {FC} from 'react'
import MainLayout from '../pages/MainLayout'
import Login from '../pages/Login'
import PATH from "../shared/constants/Path.ts";
import Persons from "../pages/Persons";
import RoomRecords from "../pages/RoomRecords";
import PersonRecords from "../pages/PersonRecords";

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<MainLayout/>}>

                    <Route path={PATH.PERSON} element={<Outlet/>}>
                        <Route path={PATH.LIST} element={<Persons/>}/>
                        <Route path={PATH.RECORDS} element={<PersonRecords/>}/>
                    </Route>

                    <Route path={PATH.ROOMS} element={<Outlet/>}>
                        <Route path={PATH.LIST} element={<div>Всі кімнати</div>}/>
                        <Route path={PATH.RECORDS} element={<RoomRecords/>}/>
                    </Route>

                    <Route path={PATH.ME} element={<div>Me</div>}/>
                    <Route path='/*' element={<div>NO ROUTE FOUND</div>}/>
                </Route>
                <Route path={PATH.LOGIN} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router