import {FC, ReactNode} from "react";
import {ConfigProvider} from "antd";
import COLORS from "../shared/constants/Colors.ts";

interface Props {
    children: ReactNode
}

const AntDesignConfigProvider: FC<Props> = ({children}) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: COLORS.green2,
                    colorLink: COLORS.green1,
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}
export default AntDesignConfigProvider