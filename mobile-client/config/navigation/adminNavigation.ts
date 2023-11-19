import AdminRoomListScreen from '../../screens/admin/AdminRoomListScreen'
import AdminRoomRecordsScreen from '../../screens/admin/AdminRoomRecordsScreen'
import AdminRoomStatScreen from '../../screens/admin/AdminRoomStatScreen'
import AdminUserListScreen from '../../screens/admin/AdminUserListScreen'
import AdminUserRecordsScreen from '../../screens/admin/AdminUserRecordsScreen'
import AdminUserStatScreen from '../../screens/admin/AdminUserStatScreen'
import { INavigation } from '../../shared/types/navigation'

export const adminNavigation: INavigation[] = [
  {
    name: 'admin_room_list',
    component: AdminRoomListScreen,
    title: 'Список кімнат',
  },
  {
    name: 'admin_room_stat',
    component: AdminRoomStatScreen,
    title: 'Статистика кімнат',
  },
  {
    name: 'admin_room_records',
    component: AdminRoomRecordsScreen,
    title: 'Записи кімнат',
  },
  {
    name: 'admin_user_list',
    component: AdminUserListScreen,
    title: 'Список користувачів',
  },
  {
    name: 'admin_user_stat',
    component: AdminUserStatScreen,
    title: 'Статистка користувачів',
  },
  {
    name: 'admin_user_records',
    component: AdminUserRecordsScreen,
    title: 'Записи користувачів',
  },
]
