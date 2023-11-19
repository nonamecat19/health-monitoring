import {apiRequest} from "../axios";

interface IRoom {
  room_number: string
  room_type: 'lecture' | 'cabinet'
}

export async function getRoomList() {
  return apiRequest.request<IRoom[]>({
    method: 'GET',
    url: '/rooms'
  })
    .then(({data}) => data)
}