import {Key, ReactNode} from "react"
import {MenuItem} from "../../shared/types/MainLayout.ts"
import {MenuOutlined, PieChartOutlined, ReconciliationOutlined, UnorderedListOutlined} from "@ant-design/icons"
import {PATH} from "../../shared/constants"

const AdminSidebar = (label: ReactNode, key: Key, icon?: ReactNode, children?: MenuItem[]): MenuItem => {
  return {label, key: `${key}`, icon, children} as MenuItem
}

export const adminSidebar: MenuItem[] = [
  AdminSidebar('Список кімнат', `${PATH.ROOMS}/${PATH.LIST}`, <UnorderedListOutlined/>),
  AdminSidebar('Записи кімнат', `${PATH.ROOMS}/${PATH.RECORDS}/${PATH.ALL}`, <ReconciliationOutlined/>),
  AdminSidebar('Статистика кімнат', `${PATH.ROOMS}/${PATH.DASHBOARD}/${PATH.ALL}`, <PieChartOutlined/>),
  AdminSidebar('Список людей', `${PATH.PERSONS}/${PATH.LIST}`, <UnorderedListOutlined/>),
  AdminSidebar('Записи людей', `${PATH.PERSONS}/${PATH.RECORDS}/${PATH.ALL}`, <ReconciliationOutlined/>),
  AdminSidebar('Статистика людей', `${PATH.PERSONS}/${PATH.DASHBOARD}/${PATH.ALL}`, <PieChartOutlined/>),
  AdminSidebar('Мій профіль', `${PATH.ME}`, <MenuOutlined/>),
]
