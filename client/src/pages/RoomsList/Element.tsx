import {FC} from "react";
import styled from "styled-components";
import {DivElement} from "./styles.ts";
import {IRoomsElementProps} from "../../shared/types/Rooms.ts";
import PATH from "../../shared/constants/Path.ts";
import {MyLink} from "../../shared/styles/styles.ts";

const Element: FC<IRoomsElementProps> = ({data}) => {
    const {room_number, room_type} = data

    return (
        <MyLink to={`/${PATH.ROOMS}/${PATH.RECORDS}/${room_number}`}>
            <DivElement>
                <Data>
                    {room_number} {room_type}
                </Data>
            </DivElement>
        </MyLink>
    )
}



const Data = styled.div`
  font-size: 1.1rem;
`

export default Element