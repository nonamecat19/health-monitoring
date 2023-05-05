import {FC} from "react"
import {IPage} from "../../shared/types/Global.ts"
import {IPersonsElement} from "../../shared/types/Persons.ts"
import Container from "./Container.tsx"
import REQUESTS from "../../shared/constants/Requests.ts";
import useSWR from 'swr'

const Persons: FC<IPage> = () => {
    const {data} = useSWR<IPersonsElement[]>(REQUESTS.PERSONS)
    if (!data) return null

    return (
        <>
            <Container data={data}/>
        </>
    )
}
export default Persons