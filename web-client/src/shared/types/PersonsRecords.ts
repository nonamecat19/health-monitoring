import {Dispatch, SetStateAction} from "react";
import {IPersonsElement} from "./Persons.ts";

export type PersonRecordType = {
  id: number
  personId: number
  person: IPersonsElement
  roomId: number
  room: {
    roomId: number
    roomNumber: string
    roomType: string
  }
  saturation: number
  heartRate: number
  temperature: number
  isCriticalResult: boolean
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
