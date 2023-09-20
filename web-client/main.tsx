import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import AntDesignConfigProvider from "./src/shared/components/AntDesignConfigProvider"
import GlobalStyles from "./src/shared/styles/global.styles"
import {RouterProvider} from "react-router-dom"
import router from "./src/shared/router/router"
import './src/config/firebase'

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <AntDesignConfigProvider>
            <GlobalStyles/>
            <RouterProvider router={router}/>
        </AntDesignConfigProvider>
    </StrictMode>
)
