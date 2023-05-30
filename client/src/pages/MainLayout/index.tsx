import {FC, useState} from 'react'
import {Menu} from "antd"
import Sider from "antd/es/layout/Sider"
import {Outlet, useNavigate} from "react-router-dom";
import items from "./sidebarItem.tsx";
import ErrorBoundary from "../../shared/components/ErrorBoundary.tsx";
import {IPage} from "../../shared/types/Global.ts";
import {ContentContainer, ContentLayout, Divider, MainContainer, MyContent, MyLayout} from "./style.ts";


const MainLayout: FC<IPage> = ({}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const navigate = useNavigate()

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
                        items={items}
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