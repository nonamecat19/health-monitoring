import {FC} from "react"
// @ts-ignore
import useSWR from 'swr'
// @ts-ignore
import REQUESTS from "../../shared/constants/Requests.ts"
import Pagination from "../../shared/ui/Pagination.tsx"
import usePagination from "../../shared/hooks/usePagination.tsx"
import Container from "./Container.tsx"
// @ts-ignore
import {IDataProps, RoomRecordType} from "../../shared/types/RoomRecords.ts"
// @ts-ignore
import {useParams} from "react-router-dom"
import roomRecords from '../../mock/roomRecords.ts'

// @ts-ignore
const Data: FC<IDataProps> = ({onlyCritical}) => {

    // const {id} = useParams()
    const [page, prev, next] = usePagination()
    // const request = id ? REQUESTS.ROOM_RECORDS_ID(id, page, onlyCritical) : REQUESTS.ROOM_RECORDS(page, onlyCritical)
    // TODO: MOCK
    // const {data} = useSWR<RoomRecordType[]>(request)
    const data = roomRecords

    if (!data) return null

    return (
        <>
            <Container data={data.data}/>
            <Pagination page={page} prev={prev} next={next}/>
        </>
    )
}
export default Data