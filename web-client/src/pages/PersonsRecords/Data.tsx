import {FC} from "react";
import usePagination from "../../shared/hooks/usePagination.tsx";
// @ts-ignore
import useSWR from "swr";
// @ts-ignore
import REQUESTS from "../../shared/constants/Requests.ts";
import Container from "./Container.tsx";
import Pagination from "../../shared/ui/Pagination.tsx";
// @ts-ignore
import {IDataProps, PersonRecordType} from "../../shared/types/PersonsRecords.ts";
// @ts-ignore
import {useParams} from "react-router-dom";
import personRecords from '../../mock/personRecords.ts'


// @ts-ignore
const Data: FC<IDataProps> = ({onlyCritical}) => {
    const [page, prev, next] = usePagination()
    // const {id} = useParams()
    // const request = id
    //     ? REQUESTS.PERSON_RECORDS_ID(id, page, onlyCritical)
    //     : REQUESTS.PERSON_RECORDS(page, onlyCritical)
    // const {data} = useSWR<PersonRecordType[]>(request)
    const data = personRecords

    if (!data) return null

    return (
        <>
            <Container data={data.data}/>
            <Pagination page={page} prev={prev} next={next}/>
        </>
    )
}
export default Data