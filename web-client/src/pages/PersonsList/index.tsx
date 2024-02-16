import {ChangeEvent, FC, Suspense, useState} from "react"
import {Skeleton} from "./Skeleton.tsx"
import {Data} from "./Data.tsx"
import {FiltersSpace, NameFilter} from "./styles.ts"
import {ToCenter} from "../../shared/styles"
import {UserOutlined} from "@ant-design/icons"
import {usePagination} from "../../shared/hooks";

export const Persons: FC = () => {
  const [search, setSearch] = useState<string>('')
  const [maxPage, setMaxPage] = useState<number>(1)
  const [page, prev, next, setPage] = usePagination(maxPage)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.currentTarget.value)
    setPage(1)
  }

  return (
    <>
      <FiltersSpace>
        <ToCenter>
          <NameFilter
            size="large"
            value={search}
            placeholder="Пошук"
            prefix={<UserOutlined/>}
            onChange={onChangeHandler}
          />
        </ToCenter>
      </FiltersSpace>
      <Suspense fallback={<Skeleton/>}>
        <Data
          search={search}
          page={page}
          prev={prev}
          next={next}
          setPage={setPage}
          maxPage={maxPage}
          setMaxPage={setMaxPage}
        />
      </Suspense>
    </>

  )
}
