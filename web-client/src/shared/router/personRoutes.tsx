import {Persons} from "../../pages/PersonsList"
import {PersonRecords} from "../../pages/PersonsRecords"
import {PATH} from "../constants"
import {PersonsDashboard} from "../../pages/PersonsDashboard";

const {LIST, RECORDS, DASHBOARD, ALL, ID} = PATH

export const personsRoutes = [
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
        path: ID,
        element: <PersonsDashboard/>
      },
      {
        path: ALL,
        element: <PersonsDashboard/>
      }
    ]
  }
]
