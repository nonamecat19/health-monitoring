import {FC} from "react";
import {usePagination} from "../../shared/hooks";
import {Container} from "./Container.tsx";
import {Pagination} from "../../shared/ui";
import {IDataProps} from "../../shared/types/PersonsRecords.ts";
import {useParams} from "react-router-dom";
import {usePersonsRecordList} from "../../shared/api";

export const Data: FC<IDataProps> = ({onlyCritical}) => {
  const [page, prev, next] = usePagination()
  const {id} = useParams()
  const {data} = usePersonsRecordList(page, onlyCritical, id)

  if (!data) return null

  return (
    <>
      <Container data={data}/>
      <Pagination page={page} prev={prev} next={next}/>
    </>
  )
}
