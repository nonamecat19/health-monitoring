import { NativeStackScreenProps } from '@react-navigation/native-stack'

export interface INavigation {
  name: string
  component: (...args: any[]) => JSX.Element
  title: string
}

export type ScreenName =
  | 'login'
  | 'admin_room_list'
  | 'admin_room_stat'
  | 'admin_room_records'
  | 'admin_user_list'
  | 'admin_user_stat'
  | 'admin_user_records'

type RootStackParamList = {
  login: undefined
  admin_room_list: undefined
  admin_room_stat: undefined
  admin_room_records: undefined
  admin_user_list: undefined
  admin_user_stat: undefined
  admin_user_records: undefined
}

export type ScreenProps = NativeStackScreenProps<RootStackParamList>
