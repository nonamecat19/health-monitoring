import {FC, Suspense, useState} from "react";
import {IPage} from "../../shared/types/Global.ts";
import Data from "./Data.tsx";
import Skeleton from "./Skeleton.tsx";
import Filters from "./Filters.tsx";

const RoomRecords: FC<IPage> = () => {

    const [onlyCritical, setOnlyCritical] = useState<boolean>(false)



    return (
        <>
            <Filters
                onlyCritical={onlyCritical}
                setOnlyCritical={setOnlyCritical}
            />

            <Suspense fallback={<Skeleton/>}>
                <Data
                    onlyCritical={onlyCritical}
                />
            </Suspense>
        </>

    )
}
export default RoomRecords