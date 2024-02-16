import {FC, Suspense} from "react"
import {Skeleton} from "./Skeleton.tsx"
import {Data} from "./Data.tsx"

export const Rooms: FC = () => {
  return (
    <Suspense fallback={<Skeleton/>}>
      <Data/>
    </Suspense>
  )
}
