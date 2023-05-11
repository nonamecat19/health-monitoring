import {FC} from "react";
import {IPage} from "../../shared/types/Global.ts";
import useSWR from "swr";
import {IPersonsElement} from "../../shared/types/Persons.ts";
import REQUESTS from "../../shared/constants/Requests.ts";
import Container from "./Container.tsx";

const Data: FC<IPage> = () => {
    const {data} = useSWR<IPersonsElement[]>(REQUESTS.PERSONS)


    // const navigate = useNavigate();
    //
    // if (error && error.status === 401) {
    //     navigate('/login');
    // }

    if (!data) return null
    return <Container data={data}/>
}
export default Data