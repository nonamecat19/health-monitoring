import useSWR from "swr";
import {REQUESTS} from "../constants";
import {GetRequest} from "./api.types.ts";
import {IPersonsElement} from "../types/Persons.ts";
import {RoomRecordType} from "../types/RoomRecords.ts";
import {IRoomsElement} from "../types/Rooms.ts";
import {PersonRecordType} from "../types/PersonsRecords.ts";
import {PersonDashboardDataRequest} from "../types/PersonDashboard.ts";
import {RoomDashboardDataRequest} from "../types/RoomDashboard.ts";

export const usePersonList = (page: number, search: string) => useSWR<GetRequest<IPersonsElement[]>>(REQUESTS.PERSON_LIST(page, search))

export const useRoomRecordList = (page: number, onlyCritical: boolean, id?: string) => {
  const request = id ? REQUESTS.ROOM_RECORDS_ID(id, page, onlyCritical) : REQUESTS.ROOM_RECORDS(page, onlyCritical)
  return useSWR<GetRequest<RoomRecordType[]>>(request)
}

export const useRoomList = () => useSWR<IRoomsElement[]>(REQUESTS.ROOM_LIST)

export const usePersonsRecordList = (page: number, onlyCritical: boolean, id?: string) => {
  const request = id
    ? REQUESTS.PERSON_RECORDS_ID(id, page, onlyCritical)
    : REQUESTS.PERSON_RECORDS(page, onlyCritical)
  return useSWR<GetRequest<PersonRecordType[]>>(request)
}

export const usePersonDashboard = (day: string, month: string, year: string, id?: string) => useSWR<PersonDashboardDataRequest>(REQUESTS.PERSON_DASHBOARD(day, month, year, id))

export const useRoomDashboard = (day: string, month: string, year: string, id?: string) => useSWR<RoomDashboardDataRequest>(REQUESTS.ROOM_DASHBOARD(day, month, year, id))
