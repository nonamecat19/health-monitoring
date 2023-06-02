import PATH from "../constants/Path.ts"
import StudentProfile from "../../pages/StudentProfile";

const {ME} = PATH

const studentRoutes = [
    {
        path: ME,
        element: <StudentProfile/>
    }
]
export default studentRoutes