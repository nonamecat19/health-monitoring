import {FC} from "react";
import {RoomRecordsContainerProps, RoomRecordType} from "../../shared/types/RoomRecords.ts";
import Element from "./Element.tsx";
import {DetailsContainer} from "../../shared/styles/styles.ts";

const Container: FC<RoomRecordsContainerProps> = ({data}) => {


    return (
        <>
            <DetailsContainer>
                {
                    data.map((item: RoomRecordType) => {
                        return <Element data={item} key={item.roomId}/>
                    })
                }
            </DetailsContainer>
        </>

    )
}

export default Container