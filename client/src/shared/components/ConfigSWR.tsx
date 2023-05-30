import {FC} from "react"
import {IPage} from "../types/Global.ts"
import {SWRConfig} from 'swr'
import axios from 'axios'
import {TOKEN_NAME} from "../constants/Requests.ts"
import { notification } from 'antd'
import {Outlet, useNavigate} from "react-router-dom"

const ConfigSWR: FC<IPage> = () => {

    const navigate = useNavigate()

    const fetcher = (url: string) => {
        const token = localStorage.getItem(TOKEN_NAME)
        const options = {
            method: 'get',
            url: url,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        return axios.request(options)
            .then(res => res.data)
            .catch(error => {
                if (error.response.status === 401) {
                    openNotification('Помилка авторизації!')
                    navigate('/login')
                } else {
                    openNotification(error.message)
                }
            })
    }

    const [api, contextHolder] = notification.useNotification()

    const openNotification = (description: string): void => {
        api.error({
            message: `Помилка`,
            description: description,
            placement: 'topRight',
            duration: 2,
        })
    }

    return (
        <SWRConfig
            value={{
                refreshInterval: 10000,
                fetcher: fetcher,
                suspense: true,
                shouldRetryOnError: false,
            }}
        >
            {contextHolder}
            <Outlet/>
        </SWRConfig>
    )
}
export default ConfigSWR