export interface INavigation {
  name: string
  component: (...args: any[]) => JSX.Element
  title: string
}

export type Route =
  'login'
  | 'admin_room_list'
  | 'admin_room_stat'
  | 'admin_room_records'
  | 'admin_user_list'
  | 'admin_user_stat'
  | 'admin_user_records'