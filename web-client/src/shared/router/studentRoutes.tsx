import {PATH} from "../constants"
import {StudentProfile} from "../../pages/StudentProfile";
import {StudentRecords} from "../../pages/StudentRecords";

const {ME, RECORDS} = PATH

export const studentRoutes = [
  {
    path: ME,
    element: <StudentProfile/>
  },
  {
    path: RECORDS,
    element: <StudentRecords/>
  }
]
