import {INavigation} from "../../shared/types/navigation";
import LoginScreen from "../../screens/LoginScreen";

export const shareNavigation: INavigation[] = [
  {
    name: "Login",
    component: LoginScreen,
    title: "Авторизаці"
  },
]