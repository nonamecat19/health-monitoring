
export const REQUEST_DOMAIN: string = 'http://localhost:3000'

const REQUESTS = {
    ROOM_RECORDS: (page: number) => `${REQUEST_DOMAIN}/testRooms/records?page=${page}`,
    ROOM_RECORDS_ID: (id: string) => `${REQUEST_DOMAIN}/testRooms/records/${id}`,
    PERSON_RECORDS: (page: number) => `${REQUEST_DOMAIN}/testPersons/records?page=${page}`,
    PERSON_RECORDS_ID: (id: string) => `${REQUEST_DOMAIN}/testPersons/records/${id}`,
    PERSONS: `${REQUEST_DOMAIN}/testPersons`,
    ROOMS: `${REQUEST_DOMAIN}/testRooms`,
}
export default REQUESTS

