
export const REQUEST_DOMAIN: string = 'http://localhost:3000'
export const TOKEN_NAME: string = 'HealthMonitoringToken'

export const GET = 'get'
export const POST = 'post'
export const PATCH = 'patch'
export const DELETE = 'delete'

export type RequestMethod = 'get' | 'post' | 'patch' | 'delete'
export type RequestPath = string



const REQUESTS = {
    LOGIN: `${REQUEST_DOMAIN}/auth/login`,
    ROOM_RECORDS: (page: number) => `${REQUEST_DOMAIN}/testRooms/records?page=${page}`,
    ROOM_RECORDS_ID: (id: string) => `${REQUEST_DOMAIN}/testRooms/records/${id}`,
    PERSON_RECORDS: (page: number) => `${REQUEST_DOMAIN}/testPersons/records?page=${page}`,
    PERSON_RECORDS_ID: (id: string) => `${REQUEST_DOMAIN}/testPersons/records/${id}`,
    PERSONS: `${REQUEST_DOMAIN}/testPersons`,
    ROOMS: `${REQUEST_DOMAIN}/testRooms`,
}
export default REQUESTS

