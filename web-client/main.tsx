import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {AntDesignConfigProvider} from "./src/shared/components"
import {GlobalStyles} from "./src/shared/styles"
import {RouterProvider} from "react-router-dom"
import {router} from "./src/shared/router"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <AntDesignConfigProvider>
      <GlobalStyles/>
      <RouterProvider router={router}/>
    </AntDesignConfigProvider>
  </StrictMode>
)
