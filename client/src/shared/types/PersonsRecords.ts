import {RoleType} from "./Persons.ts";
import {Dispatch, SetStateAction} from "react";

export type PersonRecordType = {
    id_person_records: number
    id_person: number
    room_number: string,
    oxygen: string,
    heart_rate: string,
    temperature: string,
    is_critical_results: true,
    recorded_time: Date,
    recorded_date: Date,
    person: {
        id_person: 1,
        name_person: string,
        study_group: string,
        role_person: RoleType
    },
    room: {
        room_number: string,
        room_type: string
    }
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