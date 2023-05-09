import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import Router from './src/shared/components/Router'
import AntDesignConfigProvider from "./src/shared/components/AntDesignConfigProvider";
import ConfigSWR from "./src/shared/components/ConfigSWR";
import GlobalStyles from "./src/shared/styles/global.styles";
import {GoogleOAuthProvider} from "@react-oauth/google";

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <GoogleOAuthProvider clientId="261937984929-1d97orbeqrnblqg6k4jdbo71o7jn7587.apps.googleusercontent.com">
            <AntDesignConfigProvider>
                <ConfigSWR>
                    <GlobalStyles/>
                    <Router/>
                </ConfigSWR>
            </AntDesignConfigProvider>
        </GoogleOAuthProvider>
    </StrictMode>
)
