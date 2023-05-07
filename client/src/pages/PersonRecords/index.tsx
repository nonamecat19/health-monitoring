import {IPage} from "../../shared/types/Global.ts";
import {FC, Suspense} from "react";
import Data from "./Data.tsx";
import Skeleton from "./Skeleton.tsx";

const PersonRecords: FC<IPage> = () => {

    return (
        <Suspense fallback={<Skeleton/>}>
            <Data/>
        </Suspense>
    )
}

export default PersonRecords