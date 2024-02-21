export const REQUEST_DOMAIN = 'http://localhost:3000/api/v1'
export const TOKEN_NAME = 'HealthMonitoringToken'

export const GET = 'get'
export const POST = 'post'
export const PATCH = 'patch'
export const DELETE = 'delete'

export type RequestMethod = 'get' | 'post' | 'patch' | 'delete'
export type RequestPath = string

export const REQUESTS = {
  LOGIN: `${REQUEST_DOMAIN}/auth/login`,

  ROOM_RECORDS: (page: number, critical: boolean) =>
    `${REQUEST_DOMAIN}/room-records?pageNumber=${page}&isOutputOnlyCritical=${critical}`,

  ROOM_DASHBOARD: (day: string, month: string, year: string, id: string | undefined) =>
    `${REQUEST_DOMAIN}/room-records/dashboard?day=${day}&month=${month}&year=${year}${id ? `&id=${id}` : ''}`,

  ROOM_RECORDS_ID: (id: string, page: number, critical: boolean) =>
    `${REQUEST_DOMAIN}/room-records/${id}?pageNumber=${page}&isOutputOnlyCritical=${critical}`,

  PERSON_RECORDS: (page: number, critical: boolean) =>
    `${REQUEST_DOMAIN}/person-records?page=${page}&onlyCritical=${critical}`,

  PERSON_RECORDS_ID: (id: string, page: number, critical: boolean) =>
    `${REQUEST_DOMAIN}/person-records/${id}?page=${page}&onlyCritical=${critical}`,

  PERSON_LIST: (page: number, search = '') =>
    `${REQUEST_DOMAIN}/persons?page=${page}&search=${search}`,

  PERSON_DASHBOARD: (day: string, month: string, year: string, id: string | undefined) =>
    `${REQUEST_DOMAIN}/person-records/dashboard?day=${day}&month=${month}&year=${year}${id ? `&id=${id}` : ''}`,

  ROOM_LIST: `${REQUEST_DOMAIN}/rooms`,

  STUDENT_ME: `${REQUEST_DOMAIN}/student/me`,
  STUDENT_RECORDS: `${REQUEST_DOMAIN}/student/records`,
}

