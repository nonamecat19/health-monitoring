import {FC} from "react"
import {IChildren} from "../shared/types/Global.ts"
import {SWRConfig} from 'swr'
import axios from 'axios'

const ConfigSWR: FC<IChildren> = ({children}) => {
    const fetcher = (url: string) =>
        axios(url)
            .then(res => res.data)

    return (
        <SWRConfig
            value={{
                refreshInterval: 3000,
                fetcher: fetcher,
                suspense: true
            }}
        >
                {children}
        </SWRConfig>
    )
}
export default ConfigSWR
