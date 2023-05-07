import {FC} from "react";
import usePagination from "../../shared/hooks/usePagination.tsx";
import useSWR from "swr";
import REQUESTS from "../../shared/constants/Requests.ts";
import Container from "./Container.tsx";
import Pagination from "../../shared/ui/Pagination.tsx";


const Data: FC = () => {
    const [page, prev, next] = usePagination()
    const {data} = useSWR(REQUESTS.PERSON_RECORDS(page))

    return (
        <>
            <Container data={data}/>
            <Pagination page={page} prev={prev} next={next}/>
        </>
    )
}
export default Data