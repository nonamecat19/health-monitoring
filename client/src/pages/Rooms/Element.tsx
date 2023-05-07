import {FC} from "react";
import styled from "styled-components";
import {DivElement} from "./styles.ts";
import {IRoomsElementProps} from "../../shared/types/Rooms.ts";

const Element: FC<IRoomsElementProps> = ({data}) => {
    const {room_number, room_type} = data
    const clickHandler = (): void => {
        console.log(room_number)
    }

    return (
        <DivElement onClick={clickHandler}>
            <Data>
                {room_number} {room_type}
            </Data>
        </DivElement>
    )
}

const Data = styled.div`
  font-size: 1.1rem;
`

export default Element