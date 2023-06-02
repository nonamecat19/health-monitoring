
export const REQUEST_DOMAIN: string = 'http://localhost:3000'
export const TOKEN_NAME: string = 'HealthMonitoringToken'
export const FIREBASE_TOKEN_NAME: string = 'HealthMonitoringFirebaseToken'

export const GET = 'get'
export const POST = 'post'
export const PATCH = 'patch'
export const DELETE = 'delete'

export type RequestMethod = 'get' | 'post' | 'patch' | 'delete'
export type RequestPath = string

const REQUESTS = {
    LOGIN: `${REQUEST_DOMAIN}/auth/login`,

    ROOM_RECORDS: (page: number, critical: boolean) =>
        `${REQUEST_DOMAIN}/rooms/records?page=${page}&onlyCritical=${critical}`,

    ROOM_DASHBOARD: (day: string, month: string, year: string, id: string | undefined) =>
        `${REQUEST_DOMAIN}/rooms/dashboard?day=${day}&month=${month}&year=${year}${id ? `&id=${id}` : ''}`,

    ROOM_RECORDS_ID: (id: string, page: number, critical: boolean) =>
        `${REQUEST_DOMAIN}/rooms/records/${id}?page=${page}&onlyCritical=${critical}`,

    PERSON_RECORDS: (page: number, critical: boolean) =>
        `${REQUEST_DOMAIN}/persons/records?page=${page}&onlyCritical=${critical}`,

    PERSON_RECORDS_ID: (id: string, page: number, critical: boolean) =>
        `${REQUEST_DOMAIN}/persons/records/${id}?page=${page}&onlyCritical=${critical}`,

    PERSON_LIST: (page: number, search: string = '') =>
        `${REQUEST_DOMAIN}/persons?page=${page}&search=${search}`,

    PERSON_DASHBOARD: (day: string, month: string, year: string, id: string | undefined) =>
        `${REQUEST_DOMAIN}/persons/dashboard?day=${day}&month=${month}&year=${year}${id ? `&id=${id}` : ''}`,

    ROOM_LIST: `${REQUEST_DOMAIN}/rooms`,

    STUDENT_ME: `${REQUEST_DOMAIN}/student/me`,
}
export default REQUESTS

