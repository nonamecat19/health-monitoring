import {COLORS, SIZES} from "../../shared/constants";
import styled from "styled-components";
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";

export const ContentContainer = styled.div`
    padding: ${SIZES.md};
    min-height: 360px;
    background: ${COLORS.white};
    margin-top: ${SIZES.sm};
    height: calc(100vh - 2 * ${SIZES.sm});
    overflow-y: scroll;
    border-radius: ${SIZES.sm};
`

export const Divider = styled.div`
    height: 32px;
    margin: 16px;
`

export const MyContent = styled(Content)`
    margin: 0 16px;
    height: calc(100vh - 2 * ${SIZES.sm});
`

export const MyLayout = styled(Layout)`
    height: 100vh;
    background: linear-gradient(to bottom, ${COLORS.darkAccent}, ${COLORS.darkAccentHover});
`

export const ContentLayout = styled(Layout)`
    border-radius: ${SIZES.md};
    height: calc(100vh - 2 * ${SIZES.sm});
    margin-top: ${SIZES.sm};
`

export const MainContainer = styled.div`
    background: linear-gradient(to bottom, ${COLORS.darkAccent}, ${COLORS.darkAccentHover});

    .ant-menu.ant-menu-dark {
        background-color: ${COLORS.darkAccent};
    }

    .ant-layout-sider.ant-layout-sider-dark {
        background-color: ${COLORS.darkAccent};
    }

    .ant-layout-sider-trigger {
        background-color: ${COLORS.darkAccentHover} !important;
    }

    .ant-layout-content > div {
        height: calc(100vh - 2 * ${SIZES.md});
    }

    .ant-layout {
        width: calc(100% - ${SIZES.sm});
    }
`
