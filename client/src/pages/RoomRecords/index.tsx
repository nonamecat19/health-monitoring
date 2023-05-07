import {FC, Suspense} from "react";
import {IPage} from "../../shared/types/Global.ts";
import Data from "./Data.tsx";
import Skeleton from "./Skeleton.tsx";

const RoomRecords: FC<IPage> = () => {

    return (
        <Suspense fallback={<Skeleton/>}>
            <Data/>
        </Suspense>
    )
}
export default RoomRecords