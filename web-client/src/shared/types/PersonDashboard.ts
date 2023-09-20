import {RoleType} from "./Persons.ts";

export interface IPersonDashboardDataProps {
    day: string
    month: string
    year: string
}

export type PersonDashboardDataRequest = StatElement[]


export type StatElement = {
    id_person_records: number
    id_person: number
    room_number: string
    oxygen: string
    heart_rate: string
    temperature: string
    is_critical_results: boolean
    recorded_time: Date
    recorded_date: Date
    person: {
        id_person: number
        name_person: string
        study_group: string
        role_person: RoleType
    }
}
