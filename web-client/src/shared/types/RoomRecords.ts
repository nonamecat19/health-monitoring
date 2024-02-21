import {Dispatch, SetStateAction} from "react";

export interface RoomRecordsContainerProps {
  data: RoomRecordType[]
}

export interface IRoomsRecordsFilter {
  onlyCritical: boolean
  setOnlyCritical: Dispatch<SetStateAction<boolean>>
}

export interface IDataProps {
  onlyCritical: boolean
}

export interface RoomRecordsElementProps {
  data: RoomRecordType
}

export type RoomRecordType = {
  id: number
  roomId: number
  room: {
    roomId: number
    roomNumber: string
    roomType: string
  }
  humidity: number
  temperature: number
  pressure: number
  carbonDioxide: number
  airIons: number
  ozone: number
  isCriticalResult: boolean
  recordedDate: Date | string
}

export interface ParamProps {
  label: string
  value: string | number
  units?: string
}
