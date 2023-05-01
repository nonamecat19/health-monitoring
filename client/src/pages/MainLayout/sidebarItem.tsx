import {Key, ReactNode} from "react";
import {MenuItem} from "../../shared/types/MainLayout.ts";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";
import {ME, PERSON, ROOMS} from "../../shared/constants/Routes.ts";

const SidebarItem = (label: ReactNode, key: Key, icon?: ReactNode, children?: MenuItem[]): MenuItem => {
    return {label, key, icon, children} as MenuItem
}

const items: MenuItem[] = [
    SidebarItem('Option 1', ME, <PieChartOutlined/>),
    SidebarItem('Option 2', ROOMS, <DesktopOutlined/>),
    SidebarItem('User', PERSON, <UserOutlined/>, [
        SidebarItem('Tom', '3'),
        SidebarItem('Bill', '4'),
        SidebarItem('Alex', '5'),
    ]),
    SidebarItem('Team', 'sub2', <TeamOutlined/>, [
        SidebarItem('Team 1', '6'),
        SidebarItem('Team 2', '8')
    ]),
    SidebarItem('Files', '9', <FileOutlined/>),
]

export default items