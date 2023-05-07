import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Router from './src/shared/components/Router'
import './src/shared/styles/global.style.css'
import AntDesignConfigProvider from "./src/shared/components/AntDesignConfigProvider";
import ConfigSWR from "./src/shared/components/ConfigSWR";

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <AntDesignConfigProvider>
            <ConfigSWR>
                <Router/>
            </ConfigSWR>
        </AntDesignConfigProvider>
    </StrictMode>
)
