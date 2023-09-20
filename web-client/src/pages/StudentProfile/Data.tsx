import {FC} from "react"
import useSWR from "swr";
import REQUESTS, {FIREBASE_TOKEN_NAME} from '../../shared/constants/Requests'
import {Button} from "antd";
import {Link, useNavigate} from "react-router-dom";
import PATH from "../../shared/constants/Path.ts";
type Props = {

}
const Data: FC<Props> = ({}) => {
    type StudentMeRequest = {
        id_person: number
        name_person: string
        email: string
        study_group: string
        role_person: string
    }

    const navigate = useNavigate()
    const logoutHandler = () => {
        localStorage.removeItem(FIREBASE_TOKEN_NAME)
        navigate(`/${PATH.LOGIN}`)
    }

    const {data} = useSWR<StudentMeRequest>(REQUESTS.STUDENT_ME)
    if (!data) return null
    const {name_person, email, role_person, study_group} = data

    return (
        <div>
            <h1>Ім'я: {name_person}</h1>
            <h1>Електронна пошта: {email}</h1>
            <h1>Роль: {role_person}</h1>
            <h1>Група: {study_group}</h1>

            <Link to={`/${PATH.STUDENT}/${PATH.RECORDS}`}>
                <Button>
                    Перейти до записів
                </Button>
            </Link>

            <Button onClick={logoutHandler}>
                Вийти
            </Button>
        </div>
    )
}
export default Data