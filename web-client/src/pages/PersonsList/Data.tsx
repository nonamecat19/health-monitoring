import {FC, useEffect} from "react";
// @ts-ignore
import useSWR from "swr";
// @ts-ignore
import {IPersonSearch, IPersonsRequest} from "../../shared/types/Persons.ts";
// @ts-ignore
import REQUESTS from "../../shared/constants/Requests.ts";
import Container from "./Container.tsx";
import Pagination from "../../shared/ui/Pagination.tsx";

// @ts-ignore
const Data: FC<IPersonSearch> = ({search, page, prev, next, maxPage, setMaxPage}) => {

    const {data} = useSWR<IPersonsRequest>(REQUESTS.PERSON_LIST(page, search))
    // const data = personList
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