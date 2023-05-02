import {FC, useState} from 'react'
import {Layout, Menu} from "antd"
import Sider from "antd/es/layout/Sider"
import {Content, Header} from "antd/es/layout/layout"
import styled from "styled-components"
import COLORS from "../../shared/constants/Colors.ts"
import {Outlet, useNavigate} from "react-router-dom";
import items from "./sidebarItem.tsx";


const MainLayout: FC = ({}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const navigate = useNavigate()

    return (
        <MyLayout>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <Devider/>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    onClick={({key}) => navigate(key)}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout className="site-layout">
                <MyHeader/>
                <MyContent>
                    <ContentContainer>
                        <Outlet/>
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
`

const Devider = styled.div`
  height: 32px;
  margin: 16px;
`

const MyHeader = styled(Header)`
  padding: 0;
  background: ${COLORS.white}
`

const MyContent = styled(Content)`
  margin: 0 16px;
`

const MyLayout = styled(Layout)`
  min-height: 100vh;
`

export default MainLayout