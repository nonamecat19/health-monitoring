import {FC} from 'react'
import {LoginForm} from './LoginForm.tsx'
import Title from 'antd/es/typography/Title'
import {ToCenter} from '../../shared/styles'
import {Background, LoginWrapper, SidebarLogin} from "./styles.ts";
import {StudentLogin} from "./StudentLogin.tsx";

export const Login: FC = () => {
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
