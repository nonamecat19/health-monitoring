import {RoleType} from "./Persons.ts";

export interface IPersonDashboardDataProps {
  day: string
  month: string
  year: string
}

export type PersonDashboardDataRequest = StatElement[]

export type StatElement = {
  id: number
  createdAt: string
  updatedAt: string
  saturation: number
  heartRate: number
  temperature: number
  isCriticalResult: boolean
  room: {
    id: number
    createdAt: string
    updatedAt: string
    roomNumber: string
    roomType: string
  }
  person: {
    id: number
    createdAt: Date
    updatedAt: Date
    studentID: number
    name: string
    studyGroup: string
    role: RoleType
    email: string
  }
}
