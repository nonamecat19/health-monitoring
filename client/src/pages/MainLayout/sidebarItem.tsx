import {Key, ReactNode} from "react";
import {MenuItem} from "../../shared/types/MainLayout.ts";
import {DesktopOutlined, PieChartOutlined} from "@ant-design/icons";
import PATH from "../../shared/constants/Path.ts";

const SidebarItem = (label: ReactNode, key: Key, icon?: ReactNode, children?: MenuItem[]): MenuItem => {
    return {label, key, icon, children} as MenuItem
}

const items: MenuItem[] = [
    SidebarItem('Люди', `${PATH.PERSON}/${PATH.LIST}`, <PieChartOutlined/>),
    SidebarItem('Кімнати', `${PATH.ROOMS}/${PATH.LIST}`, <DesktopOutlined/>),
    SidebarItem('Записи людей', `${PATH.PERSON}/${PATH.RECORDS}`, <DesktopOutlined/>),
    SidebarItem('Записи кімнат', `${PATH.ROOMS}/${PATH.RECORDS}`, <PieChartOutlined/>),
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