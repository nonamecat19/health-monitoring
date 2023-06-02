import PATH from "../constants/Path.ts"
import adminRoutes from "./adminRoutes.tsx";
import studentRoutes from "./studentRoutes.tsx";

const {ADMIN, STUDENT} = PATH

const mainRoutes = [
    {
        path: STUDENT,
        children: studentRoutes
    },
    {
        path: ADMIN,
        children: adminRoutes
    }
]
export default mainRoutes