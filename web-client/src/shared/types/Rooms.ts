export interface IRoomsRequest {
  data: IRoomsElement
  maxPage: number
}

export interface IRoomsElement {
  roomNumber: string
  roomType: string
  roomId: number
  createdAt: Date
  updatedAt: Date
}

export interface IRoomsListProps {
  data: IRoomsElement[]
}

export interface IRoomsElementProps {
  data: IRoomsElement
}
