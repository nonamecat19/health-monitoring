import {FC, Suspense} from "react"
import ErrorBoundary from "../../shared/components/ErrorBoundary.tsx";
import Data from "./Data.tsx";
type Props = {

}
const StudentProfile: FC<Props> = ({}) => {

    return (
        <ErrorBoundary fallback={<p>Error</p>}>
            <Suspense fallback={<p>Loading</p>}>
                <Data/>
            </Suspense>
        </ErrorBoundary>

    )
}
export default StudentProfile