import {FC} from "react";
import Element from "./Element.tsx";
import {DivContainer} from "./styles.ts";
import {IRoomsElement, IRoomsListProps} from "../../shared/types/Rooms.ts";

const Container: FC<IRoomsListProps> = ({data}) => {

    return (
        <DivContainer>
            {
                data.map((item: IRoomsElement) => {
                    return <Element data={item} key={item.room_number}/>
                })
            }
        </DivContainer>
    )
}

export default Container