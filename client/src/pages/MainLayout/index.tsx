import {FC, Suspense, useState} from 'react'
import {Layout, Menu} from "antd"
import Sider from "antd/es/layout/Sider"
import {Content} from "antd/es/layout/layout"
import styled from "styled-components"
import COLORS from "../../shared/constants/Colors.ts"
import {Outlet, useNavigate} from "react-router-dom";
import items from "./sidebarItem.tsx";
import ErrorBoundary from "../../components/ErrorBoundary.tsx";
import {IPage} from "../../shared/types/Global.ts";


const MainLayout: FC<IPage> = ({}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const navigate = useNavigate()

    return (
        <MyLayout>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <Divider/>
                <Menu
                    theme="dark"
                    onClick={({key}) => navigate(key)}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout className="site-layout">
                <MyContent>
                    <ContentContainer>

                        <ErrorBoundary fallback={<>Error</>}>
                            <Suspense fallback={<>Loading</>}>
                                <Outlet/>
                            </Suspense>
                        </ErrorBoundary>

                    </ContentContainer>
                </MyContent>
            </Layout>
        </MyLayout>
    )
}

const ContentContainer = styled.div`
  padding: 24px;
  min-height: 360px;
  background: ${COLORS.white};
  margin-top: 20px;
  height: calc(100vh - 40px);
  overflow-y: auto;
`

const Divider = styled.div`
  height: 32px;
  margin: 16px;
`

const MyContent = styled(Content)`
  margin: 0 16px;
`

const MyLayout = styled(Layout)`
  min-height: 100vh;
`

export default MainLayout