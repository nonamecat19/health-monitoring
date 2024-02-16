import {FC, useEffect} from "react";
import {IPersonSearch} from "../../shared/types/Persons.ts";
import {Container} from "./Container.tsx";
import {Pagination} from "../../shared/ui";
import {usePersonList} from "../../shared/api";

export const Data: FC<IPersonSearch> = ({search, page, prev, next, maxPage, setMaxPage}) => {
  const {data} = usePersonList(page, search)

  useEffect(() => {
    data && setMaxPage(data.maxPage)
  })

  if (!data) return null

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
