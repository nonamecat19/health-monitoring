import {Key, ReactNode} from "react";
import {MenuItem} from "../../shared/types/MainLayout.ts";
import {DesktopOutlined, PieChartOutlined} from "@ant-design/icons";
import PATH from "../../shared/constants/Path.ts";

const SidebarItem = (label: ReactNode, key: Key, icon?: ReactNode, children?: MenuItem[]): MenuItem => {
    return {label, key, icon, children} as MenuItem
}

const items: MenuItem[] = [
    SidebarItem('Список кімнат', `${PATH.ROOMS}/${PATH.LIST}`, <DesktopOutlined/>),
    SidebarItem('Записи кімнат', `${PATH.ROOMS}/${PATH.RECORDS}/${PATH.ALL}`, <PieChartOutlined/>),
    SidebarItem('Статистика кімнат', `${PATH.ROOMS}/${PATH.DASHBOARD}/${PATH.ALL}`, <DesktopOutlined/>),
    SidebarItem('Список людей', `${PATH.PERSONS}/${PATH.LIST}`, <PieChartOutlined/>),
    SidebarItem('Записи людей', `${PATH.PERSONS}/${PATH.RECORDS}/${PATH.ALL}`, <DesktopOutlined/>),
    SidebarItem('Статистика людей', `${PATH.PERSONS}/${PATH.DASHBOARD}/${PATH.ALL}`, <DesktopOutlined/>),
    // SidebarItem('User', 'sub1', <UserOutlined/>, [
    //     SidebarItem('Tom', '3'),
    //     SidebarItem('Bill', '4'),
    //     SidebarItem('Alex', '5'),
    // ]),
    // SidebarItem('Team', 'sub2', <TeamOutlined/>, [
    //     SidebarItem('Team 1', '6'),
    //     SidebarItem('Team 2', '8')
    // ]),
    // SidebarItem('Files', '9', <FileOutlined/>),
]

export default items