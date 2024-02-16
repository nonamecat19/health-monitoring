import {FC, Suspense, useState} from "react";
import {Data} from "./Data.tsx";
import {Skeleton} from "./Skeleton.tsx";
import {Filters} from "./Filters.tsx";

export const RoomRecords: FC = () => {
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
