import {Dispatch, SetStateAction} from "react";

export interface IPaginationProps {
  page: number,
  prev: () => void,
  next: () => void,
  max?: number
}

export type usePaginationReturn = Readonly<[
  page: number,
  prev: () => void,
  next: () => void,
  setPage: Dispatch<SetStateAction<number>>
]>
