import {FC, Suspense} from "react"
import {IPage} from "../../shared/types/Global.ts"
import Skeleton from "./Skeleton.tsx"
import Data from "./Data.tsx"


const Rooms: FC<IPage> = () => {
    return (
        <Suspense fallback={<Skeleton/>}>
            <Data/>
        </Suspense>
    )
}
export default Rooms