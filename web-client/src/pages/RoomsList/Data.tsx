import {FC} from "react";
import {IPage} from "../../shared/types/Global.ts";
import Container from "./Container.tsx";
import roomList from '../../mock/roomList.ts'

const Data: FC<IPage> = () => {
    // TODO: MOCK
    // const {data} = useSWR<IRoomsElement[]>(REQUESTS.ROOM_LIST)
    const data = roomList
    console.log({data})
    if (!data) return null
    return <Container data={data}/>
}
export default Data