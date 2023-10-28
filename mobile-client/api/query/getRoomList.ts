import {apiRequest} from "../axios";

interface IRoom {
  room_number: string
}

export async function getRoomList() {
  return apiRequest.request<IRoom[]>({
    method: 'GET',
    url: '/rooms'
  })
    .then(({data}) => data)
}