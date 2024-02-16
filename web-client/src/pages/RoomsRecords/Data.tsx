import {FC} from "react"
import {Pagination} from "../../shared/ui"
import {usePagination} from "../../shared/hooks"
import {Container} from "./Container.tsx"
import {IDataProps} from "../../shared/types/RoomRecords.ts"
import {useParams} from "react-router-dom";
import {useRoomRecordList} from "../../shared/api";

export const Data: FC<IDataProps> = ({onlyCritical}) => {
  const {id} = useParams()
  const [page, prev, next] = usePagination()
  const {data} = useRoomRecordList(page, onlyCritical, id)

  if (!data) return null

  return (
    <>
      <Container data={data.data}/>
      <Pagination page={page} prev={prev} next={next}/>
    </>
  )
}
