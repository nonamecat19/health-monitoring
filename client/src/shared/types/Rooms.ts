



export interface IRoomsElement {
    room_number: string,
    room_type: string
}

export interface IRoomsListProps {
    data: IRoomsElement[]
}

export interface IRoomsElementProps {
    data: IRoomsElement
}