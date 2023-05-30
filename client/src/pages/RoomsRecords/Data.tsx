import {FC} from "react"
import useSWR from 'swr'
import REQUESTS from "../../shared/constants/Requests.ts"
import Pagination from "../../shared/ui/Pagination.tsx"
import usePagination from "../../shared/hooks/usePagination.tsx"
import Container from "./Container.tsx"
import {IDataProps, RoomRecordType} from "../../shared/types/RoomRecords.ts"
import {useParams} from "react-router-dom"

const Data: FC<IDataProps> = ({onlyCritical}) => {

    const {id} = useParams()
    const [page, prev, next] = usePagination()
    const request = id ? REQUESTS.ROOM_RECORDS_ID(id, page, onlyCritical) : REQUESTS.ROOM_RECORDS(page, onlyCritical)
    const {data} = useSWR<RoomRecordType[]>(request)

    if (!data) return null

    return (
        <>
            <Container data={data}/>
            <Pagination page={page} prev={prev} next={next}/>
        </>
    )
}
export default Data