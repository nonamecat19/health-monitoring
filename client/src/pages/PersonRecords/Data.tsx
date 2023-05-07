import {FC} from "react";
import usePagination from "../../shared/hooks/usePagination.tsx";
import useSWR from "swr";
import REQUESTS from "../../shared/constants/Requests.ts";
import Container from "./Container.tsx";
import Pagination from "../../shared/ui/Pagination.tsx";
import {PersonRecordType} from "../../shared/types/PersonsRecords.ts";


const Data: FC = () => {
    const [page, prev, next] = usePagination()
    const {data} = useSWR<PersonRecordType[]>(REQUESTS.PERSON_RECORDS(page))

    if (!data) return null

    return (
        <>
            <Container data={data}/>
            <Pagination page={page} prev={prev} next={next}/>
        </>
    )
}
export default Data