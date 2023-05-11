import {FC} from "react"
import {IChildren} from "../types/Global.ts"
import {SWRConfig} from 'swr'
import axios from 'axios'
import {TOKEN_NAME} from "../constants/Requests.ts"
import { notification } from 'antd'

const ConfigSWR: FC<IChildren> = ({children}) => {

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
                    setTimeout(() => {
                        alert('Ваш санс завершено. Будь ласка авторизуйтесь ще раз.')
                        window.history.pushState({}, '', '/login')
                        window.location.reload()
                    }, 1000)

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
            {children}
        </SWRConfig>
    )
}
export default ConfigSWR