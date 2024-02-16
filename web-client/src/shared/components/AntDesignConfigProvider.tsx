import {FC, ReactNode} from "react"
import {ConfigProvider} from "antd"
import {COLORS} from "../constants"
import ukUA from 'antd/locale/uk_UA'

interface Props {
  children: ReactNode
}

export const AntDesignConfigProvider: FC<Props> = ({children}) => {
  return (
    <ConfigProvider
      locale={ukUA}
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
