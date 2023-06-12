import {Key, ReactNode} from "react"
import {MenuItem} from "../../shared/types/MainLayout.ts"
import {ReconciliationOutlined, MenuOutlined} from "@ant-design/icons"
import PATH from "../../shared/constants/Path.ts"

const AdminSidebar = (label: ReactNode, key: Key, icon?: ReactNode, children?: MenuItem[]): MenuItem => {
    return {label, key: `${key}`, icon, children} as MenuItem
}

const studentSidebar: MenuItem[] = [
    AdminSidebar('Мої записи', `${PATH.RECORDS}`, <ReconciliationOutlined/>),
    AdminSidebar('Мій профіль', `${PATH.ME}`, <MenuOutlined/>),
]

export default studentSidebar