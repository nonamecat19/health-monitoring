import {FC} from "react"
import useSWR from "swr";
import {REQUESTS} from '../../shared/constants'
import {Button} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {PATH} from "../../shared/constants";

export const Data: FC = () => {
  type StudentMeRequest = {
    id_person: number
    name_person: string
    email: string
    study_group: string
    role_person: string
  }

  const navigate = useNavigate()
  const logoutHandler = () => {
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
