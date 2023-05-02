import {Route, BrowserRouter, Routes} from 'react-router-dom'
import {FC} from 'react'
import MainLayout from '../pages/MainLayout'
import Login from '../pages/Login'
import {LOGIN, ME, PERSON, ROOMS} from "../shared/constants/Routes.ts";

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route path='/1' element={<div>1</div>}/>
                    <Route path={PERSON} element={<div>Person</div>}/>
                    <Route path={ME} element={<div>Me</div>}/>
                    <Route path={ROOMS} element={<div>Кімната</div>}/>
                    <Route path='/5' element={<div>5</div>}/>
                </Route>
                <Route path={LOGIN} element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router