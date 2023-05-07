import {FC} from "react";
import {IPage} from "../../shared/types/Global.ts";
import useSWR from 'swr'
import REQUESTS from "../../shared/constants/Requests.ts";
import Pagination from "../../shared/ui/Pagination.tsx";
import usePagination from "../../shared/hooks/usePagination.tsx";
import Container from "./Container.tsx";
import {RoomRecordType} from "../../shared/types/RoomRecords.ts";

const Data: FC<IPage> = () => {
    const [page, prev, next] = usePagination()
    const {data} = useSWR<RoomRecordType[]>(REQUESTS.ROOM_RECORDS(page))

    if (!data) return null

    return (
        <>
            <Container data={data}/>
            <Pagination page={page} prev={prev} next={next}/>
        </>
    )
}
export default Data