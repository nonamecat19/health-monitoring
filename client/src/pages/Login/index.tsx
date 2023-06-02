import {FC} from 'react'
import LoginForm from './LoginForm.tsx'
import Title from 'antd/es/typography/Title'
import {ToCenter} from '../../shared/styles/styles.ts'
import {IPage} from "../../shared/types/Global.ts";
import {Background, LoginWrapper, SidebarLogin} from "./styles.ts";
import StudentLogin from "./StudentLogin.tsx";

const Login: FC<IPage> = () => {
    return (
        <Background>
            <SidebarLogin>
                <LoginWrapper>
                    <ToCenter>
                        <Title>Вхід</Title>
                    </ToCenter>
                    <LoginForm/>
                    <StudentLogin/>
                </LoginWrapper>
            </SidebarLogin>
        </Background>
    )
}

export default Login