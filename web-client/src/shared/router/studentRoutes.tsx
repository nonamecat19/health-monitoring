import PATH from "../constants/Path.ts"
import StudentProfile from "../../pages/StudentProfile";
import StudentRecords from "../../pages/StudentRecords";

const {ME, RECORDS} = PATH

const studentRoutes = [
    {
        path: ME,
        element: <StudentProfile/>
    },
    {
        path: RECORDS,
        element: <StudentRecords/>
    }
]
export default studentRoutes