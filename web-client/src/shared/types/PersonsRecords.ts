import {Dispatch, SetStateAction} from "react";

export type PersonRecordType = {
  personRecordId: number
  personId: number
  person: {
    personId: number
    studentID: number
    name: string
    studyGroup: string
    role: string
    email: string
  }
  roomId: number
  room: {
    roomId: number
    roomNumber: string
    roomType: string
  }
  saturation: number
  heartRate: number
  temperature: number
  isCriticalResults: boolean
  recordedDate: string
}

export interface IRoomsRecordsFilter {
  onlyCritical: boolean
  setOnlyCritical: Dispatch<SetStateAction<boolean>>
}

export interface IDataProps {
  onlyCritical: boolean
}

export interface IPersonRecordsContainerProps {
  data: PersonRecordType[]
}

export interface IPersonRecordsElementProps {
  data: PersonRecordType
}
