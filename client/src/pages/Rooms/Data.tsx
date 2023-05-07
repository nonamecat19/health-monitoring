import {FC} from "react";
import {IPage} from "../../shared/types/Global.ts";
import useSWR from "swr";
import REQUESTS from "../../shared/constants/Requests.ts";
import Container from "./Container.tsx";
import {IRoomsElement} from "../../shared/types/Rooms.ts";

const Data: FC<IPage> = () => {
    const {data} = useSWR<IRoomsElement[]>(REQUESTS.ROOMS)
    if (!data) return null
    return <Container data={data}/>
}
export default Data