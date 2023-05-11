import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import AntDesignConfigProvider from "./src/shared/components/AntDesignConfigProvider";
import ConfigSWR from "./src/shared/components/ConfigSWR";
import GlobalStyles from "./src/shared/styles/global.styles";
import {RouterProvider} from "react-router-dom";
import router from "./src/shared/components/Router";

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <AntDesignConfigProvider>
            <ConfigSWR>
                <GlobalStyles/>
                <RouterProvider router={router}/>
            </ConfigSWR>
        </AntDesignConfigProvider>
    </StrictMode>
)
