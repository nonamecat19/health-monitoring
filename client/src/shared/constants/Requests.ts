
export const REQUEST_DOMAIN: string = 'http://localhost:3000/test'

const REQUESTS = {
    ROOM_RECORDS: (page: number) => `${REQUEST_DOMAIN}/environment_conditions?page=${page}`,
    PERSON_RECORDS: (page: number) => `${REQUEST_DOMAIN}/person_conditions?page=${page}`,
    PERSONS: `${REQUEST_DOMAIN}/persons`
}
export default REQUESTS

