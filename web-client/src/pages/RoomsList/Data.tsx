import {FC} from "react";
import {Container} from "./Container.tsx";
import {useRoomList} from "../../shared/api";

export const Data: FC = () => {
  const {data} = useRoomList()

  if (!data) return null

  return <Container data={data}/>
}
