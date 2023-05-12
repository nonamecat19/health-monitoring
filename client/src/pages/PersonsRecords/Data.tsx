import {FC} from "react";
import usePagination from "../../shared/hooks/usePagination.tsx";
import useSWR from "swr";
import REQUESTS from "../../shared/constants/Requests.ts";
import Container from "./Container.tsx";
import Pagination from "../../shared/ui/Pagination.tsx";
import {IDataProps, PersonRecordType} from "../../shared/types/PersonsRecords.ts";
import {useParams} from "react-router-dom";


const Data: FC<IDataProps> = ({onlyCritical}) => {
    const [page, prev, next] = usePagination()
    const {id} = useParams()
    const request = id
        ? REQUESTS.PERSON_RECORDS_ID(id, page, onlyCritical)
        : REQUESTS.PERSON_RECORDS(page, onlyCritical)
    const {data} = useSWR<PersonRecordType[]>(request)


    console.log(id)

    if (!data) return null

    return (
        <>
            <Container data={data}/>
            <Pagination page={page} prev={prev} next={next}/>
        </>
    )
}
export default Data