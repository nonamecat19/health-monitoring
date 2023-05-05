import {IPage} from "../../shared/types/Global.ts";
import {FC} from "react";
import Container from "./Container.tsx";
import usePagination from "../../shared/hooks/usePagination.tsx";
import REQUESTS from "../../shared/constants/Requests.ts";
import useSWR from "swr";
import Pagination from "../../shared/ui/Pagination.tsx";

const PersonRecords: FC<IPage> = () => {
    const [page, prev, next] = usePagination()
    const {data} = useSWR(REQUESTS.PERSON_RECORDS(page))

    return (
        <>
            <Container data={data}/>
            <Pagination page={page} prev={prev} next={next}/>
        </>
    )
}

export default PersonRecords