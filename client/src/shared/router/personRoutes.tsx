import Persons from "../../pages/PersonsList"
import PersonRecords from "../../pages/PersonsRecords"
import PATH from "../constants/Path.ts"

const {LIST, RECORDS, DASHBOARD, ALL, ID} = PATH

const personsRoutes = [
    {
        path: LIST,
        element: <Persons/>
    },
    {
        path: RECORDS,
        children: [
            {
                path: ALL,
                element: <PersonRecords/>
            },
            {
                path: ID,
                element: <PersonRecords/>
            }
        ]
    },
    {
        path: DASHBOARD,
        children: [
            {
                path: ALL,
                element: <>PERSONS/DASHBOARD/ALL</>
            },
            {
                path: ID,
                element: <>PERSONS/DASHBOARD/ID</>
            }
        ]
    }
]
export default personsRoutes