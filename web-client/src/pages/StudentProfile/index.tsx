import {FC, Suspense} from "react"
import {ErrorBoundary} from "../../shared/components";
import {Data} from "./Data.tsx";

export const StudentProfile: FC = () => {
  return (
    <ErrorBoundary fallback={<p>Error</p>}>
      <Suspense fallback={<p>Loading</p>}>
        <Data/>
      </Suspense>
    </ErrorBoundary>

  )
}
