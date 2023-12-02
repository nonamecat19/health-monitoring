import LoginScreen from '../../screens/LoginScreen'
import { INavigation } from '../../shared/types/navigation'

export const shareNavigation: INavigation[] = [
  {
    name: 'login',
    component: LoginScreen,
    title: 'Авторизація',
  },
]
