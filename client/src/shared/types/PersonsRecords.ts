import {RoleType} from "./Persons.ts";

export type PersonRecordType = {
    id_person_condition: number
    id_person: number
    id_room: number
    id_date: number
    oxygen: number
    heart_rate: number
    body_temperature: number
    is_critical_condition: boolean
    recorded_time: Date
    person: {
        id_person: number
        name_person: string
        study_group: string
        role: RoleType
    }
    room: {
        id_room: number
        room_number: number
    }
    date_of_recording: {
        id_date: number
        recorded_date: Date
    }
}

export interface IPersonRecordsContainerProps {
    data: PersonRecordType[]
}

export interface IPersonRecordsElementProps {
    data: PersonRecordType
}