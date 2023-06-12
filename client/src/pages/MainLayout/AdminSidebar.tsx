import {Key, ReactNode} from "react"
import {MenuItem} from "../../shared/types/MainLayout.ts"
import {DesktopOutlined, PieChartOutlined} from "@ant-design/icons"
import PATH from "../../shared/constants/Path.ts"

const AdminSidebar = (label: ReactNode, key: Key, icon?: ReactNode, children?: MenuItem[]): MenuItem => {
    return {label, key: `${PATH.ADMIN}/${key}`, icon, children} as MenuItem
}

const adminSidebar: MenuItem[] = [
    AdminSidebar('Список кімнат', `${PATH.ROOMS}/${PATH.LIST}`, <DesktopOutlined/>),
    AdminSidebar('Записи кімнат', `${PATH.ROOMS}/${PATH.RECORDS}/${PATH.ALL}`, <PieChartOutlined/>),
    AdminSidebar('Статистика кімнат', `${PATH.ROOMS}/${PATH.DASHBOARD}/${PATH.ALL}`, <PieChartOutlined/>),
    AdminSidebar('Список людей', `${PATH.PERSONS}/${PATH.LIST}`, <PieChartOutlined/>),
    AdminSidebar('Записи людей', `${PATH.PERSONS}/${PATH.RECORDS}/${PATH.ALL}`, <DesktopOutlined/>),
    AdminSidebar('Статистика людей', `${PATH.PERSONS}/${PATH.DASHBOARD}/${PATH.ALL}`, <PieChartOutlined/>),
    AdminSidebar('Мій профіль', `${PATH.ME}`, <DesktopOutlined/>),
]

export default adminSidebar