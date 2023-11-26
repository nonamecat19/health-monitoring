import { useQuery } from 'react-query'

import { apiRequest } from '../axios'

export interface IRoomRecord {
  id_room_records: number
  room_number: string
  humidity: string
  temperature: string
  pressure: string
  carbon_dioxide: string
  air_ions: string
  ozone: string
  is_critical_results: boolean
  recorded_time: Date
  recorded_date: Date
  room: {
    room_number: string
    room_type: string
  }
}

export async function getUserRecords() {
  const page = 0
  const onlyCritical = false
  return apiRequest
    .request<IRoomRecord[]>({
      method: 'GET',
      url: '/persons/records',
      data: {
        page,
        onlyCritical,
      },
    })
    .then(({ data }) => data)
}

export function useGetRoomRecords() {
  return useQuery('admin_user_records', getUserRecords)
}
