import {FC, useEffect} from "react";
import useSWR from "swr";
import {IPersonSearch, IPersonsRequest} from "../../shared/types/Persons.ts";
import REQUESTS from "../../shared/constants/Requests.ts";
import Container from "./Container.tsx";
import Pagination from "../../shared/ui/Pagination.tsx";

const Data: FC<IPersonSearch> = ({search, page, prev, next, maxPage, setMaxPage}) => {

    const {data} = useSWR<IPersonsRequest>(REQUESTS.PERSON_LIST(page, search))
    if (!data) return null

    useEffect((): void => {
        setMaxPage(data.maxPage)
    })

    return (
        <>
            <Container data={data.data}/>
            <Pagination
                page={page}
                prev={prev}
                next={next}
                max={maxPage}
            />
        </>
    )
}
export default Data