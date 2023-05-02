

export interface IPaginationProps {
    page: number,
    prev: () => void,
    next: () => void,
}


export type usePaginationReturn = Readonly<[
    page: number,
    prev: () => void,
    next: () => void,
]>