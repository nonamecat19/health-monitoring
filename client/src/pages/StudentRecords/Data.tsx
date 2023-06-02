import {FC} from "react"
import useSWR from "swr";
import REQUESTS from "../../shared/constants/Requests.ts";
type Props = {
 
}
const Data: FC<Props> = ({}) => {

    const {data} = useSWR(REQUESTS.STUDENT_RECORDS)
    if (!data) return null


    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}
export default Data