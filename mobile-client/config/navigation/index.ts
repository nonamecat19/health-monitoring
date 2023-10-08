import {adminNavigation} from "./adminNavigation";
import {INavigation} from "../../shared/types/navigation";
import {studentNavigation} from "./studentNavigation";
import {shareNavigation} from "./shareNavigation";

export const navigationConfig: INavigation[] = [
  ...adminNavigation,
  ...studentNavigation,
  ...shareNavigation
]