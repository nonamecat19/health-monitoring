import {FC} from "react";
import {RoomRecordsContainerProps, RoomRecordType} from "../../shared/types/RoomRecords.ts";
import Item from "./Item.tsx";
import {DetailsContainer} from "../../shared/styles/styles.ts";

const Container: FC<RoomRecordsContainerProps> = ({data}) => {

    return (
        <DetailsContainer>
            {data.map((item: RoomRecordType) => <Item data={item} key={item.id_room}/>)}
        </DetailsContainer>
    )
}

export default Container