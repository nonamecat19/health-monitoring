import {FC, ReactNode} from "react";

interface Props {
    children: ReactNode
    number: number
}

const ForComponent: FC<Props> = ({children, number}) => {
    const arr: null[] = new Array(number).fill(null)
    return <>{arr.map(() => children)}</>
}
export default ForComponent