import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Router from './src/shared/components/Router'
import AntDesignConfigProvider from "./src/shared/components/AntDesignConfigProvider";
import ConfigSWR from "./src/shared/components/ConfigSWR";
import GlobalStyles from "./src/shared/styles/global.styles";
import {GoogleOAuthProvider} from "@react-oauth/google";

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <AntDesignConfigProvider>
            <ConfigSWR>
                <GlobalStyles/>
                <Router/>
            </ConfigSWR>
        </AntDesignConfigProvider>
    </StrictMode>
)
