import {INavigation} from "../../shared/types/navigation";
import LoginScreen from "../../screens/LoginScreen";

export const shareNavigation: INavigation[] = [
  {
    name: "login",
    component: LoginScreen,
    title: "Авторизаці"
  },
]