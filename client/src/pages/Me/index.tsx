import {IPage} from "../../shared/types/Global.ts";
import {FC} from "react";
import {Button} from "antd";
import {TOKEN_NAME} from "../../shared/constants/Requests.ts";
import {useNavigate} from "react-router-dom";

const Me: FC<IPage> = () => {

    const navigate = useNavigate()

    const LogoutHandler = (): void => {
        localStorage.removeItem(TOKEN_NAME)
        navigate('/login')
    }

    return (
        <>
            <Button
                onClick={LogoutHandler}
            >
                Вийти з аккаунту
            </Button>

        </>
    )
}
export default Me