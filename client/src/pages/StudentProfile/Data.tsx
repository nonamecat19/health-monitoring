import {FC} from "react"
import useSWR from "swr";
import REQUESTS from '../../shared/constants/Requests'
type Props = {

}
const Data: FC<Props> = ({}) => {
    type StudentMeRequest = {
        name: string
        email: string
    }

    const {data} = useSWR<StudentMeRequest>(REQUESTS.STUDENT_ME)

    if (!data) return null

    return (
        <div>
            <h1>Ім'я: {data.name}</h1>
            <h1>Електронна пошта {data.email}</h1>
        </div>
    )
}
export default Data