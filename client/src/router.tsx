import {createBrowserRouter} from 'react-router-dom'
import Main from "./pages/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
    },
    {
        path: '/test',
        element: <div>Test!</div>,
    },
])
export default router