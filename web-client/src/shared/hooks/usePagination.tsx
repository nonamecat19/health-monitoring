import {useState} from "react";
import {usePaginationReturn} from "../types/Pagination.ts";

export const usePagination = (max = 100): usePaginationReturn => {
  const [page, setPage] = useState<number>(1)

  const prev = (): void => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const next = (): void => {
    if (page < max) {
      setPage(page + 1)
    }
  }

  return [page, prev, next, setPage] as const
}
