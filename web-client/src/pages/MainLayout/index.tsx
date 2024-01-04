import {FC, useState} from 'react'
import {Menu} from "antd"
import Sider from "antd/es/layout/Sider"
import {Outlet, useNavigate} from "react-router-dom"
import ErrorBoundary from "../../shared/components/ErrorBoundary.tsx"
import {ContentContainer, ContentLayout, Divider, MainContainer, MyContent, MyLayout} from "./style.ts"
import {MainLayoutProps, MenuItem} from "../../shared/types/MainLayout.ts"
import adminSidebar from "./AdminSidebar.tsx"
import studentSidebar from "./StudentSidebar.tsx"


const MainLayout: FC<MainLayoutProps> = ({type}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const navigate = useNavigate()

    let sidebarItems: MenuItem[] = []
    switch (type) {
        case "admin":
            sidebarItems = adminSidebar
            break
        case "student":
            sidebarItems = studentSidebar
            break
    }

    return (
        <MainContainer>
            <MyLayout>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                    theme={'dark'}
                    breakpoint="md"
                    collapsedWidth="50"
                >
                    <Divider/>
                    <Menu
                        theme="dark"
                        onClick={({key}) => navigate(key)}
                        mode="inline"
                        items={sidebarItems}
                    />
                </Sider>
                <ContentLayout className="site-layout">
                    <MyContent>
                        <ContentContainer>
                            <ErrorBoundary fallback={<>Error</>}>
                                <Outlet/>
                            </ErrorBoundary>
                        </ContentContainer>
                    </MyContent>
                </ContentLayout>
            </MyLayout>
        </MainContainer>
    )
}

export default MainLayout