import Rooms from "../../pages/RoomsList"
import RoomRecords from "../../pages/RoomsRecords"
import PATH from "../constants/Path.ts"
import RoomsDashboard from "../../pages/RoomsDashboard";

const {LIST, RECORDS, DASHBOARD, ALL, ID} = PATH

const roomsRoutes = [
    {
        path: LIST,
        element: <Rooms/>
    },
    {
        path: RECORDS,
        children: [
            {
                path: ALL,
                element: <RoomRecords/>
            },
            {
                path: ID,
                element: <RoomRecords/>
            }
        ]
    },
    {
        path: DASHBOARD,
        children: [
            {
                path: ALL,
                element: <RoomsDashboard/>
            },
            {
                path: ID,
                element: <RoomsDashboard/>
            }
        ]
    }
]
export default roomsRoutes