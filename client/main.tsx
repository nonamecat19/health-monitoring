import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Router from './src/components/Router'
import './src/shared/styles/global.style.css'
import AntDesignConfigProvider from "./src/components/AntDesignConfigProvider";

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <AntDesignConfigProvider>
            <Router/>
        </AntDesignConfigProvider>
    </StrictMode>
)
