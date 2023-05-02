import {FC} from "react";
import {RoomRecordsContainerProps, RoomRecordType} from "../../shared/types/RoomRecords.ts";
import RoomRecordsItem from "./RoomRecordsItem.tsx";
import {DetailsContainer} from "../../shared/styles/styles.ts";

const RoomRecordsContainer: FC<RoomRecordsContainerProps> = ({data}) => {

    return (
        <DetailsContainer>
            {data.map((item: RoomRecordType) => <RoomRecordsItem data={item} key={item.id_room}/>)}
        </DetailsContainer>
    )
}

export default RoomRecordsContainer