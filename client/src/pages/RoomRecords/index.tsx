import {FC} from "react";
import {IPage} from "../../shared/types/Global.ts";
import useSWR from 'swr'
import REQUESTS from "../../shared/constants/Requests.ts";
import Pagination from "../../shared/ui/Pagination.tsx";
import usePagination from "../../shared/hooks/usePagination.tsx";
import RoomRecordsContainer from "./RoomRecordsContainer.tsx";

const RoomRecords: FC<IPage> = () => {
    const [page, prev, next] = usePagination()
    const {data} = useSWR(REQUESTS.ROOM_RECORDS(page))

    return (
        <>
            <RoomRecordsContainer data={data}/>
            <Pagination page={page} prev={prev} next={next}/>
        </>
    )
}
export default RoomRecords