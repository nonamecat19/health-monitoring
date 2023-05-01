// @ts-ignore
import backgroundImage from '../../shared/assets/login-background.jpg'
import {FC} from 'react'
import styled from 'styled-components'
import COLORS from '../../shared/constants/Colors.ts'
import LoginForm from './loginForm.tsx'
import Title from 'antd/es/typography/Title'
import {ToCenter} from '../../shared/styles/styles.ts'
import SIZES from '../../shared/constants/Sizes.ts'

const Login: FC = () => {
    return (
        <Background>
            <SidebarLogin>
                <LoginWrapper>
                    <ToCenter>
                        <Title>Вхід</Title>
                    </ToCenter>
                    <LoginForm/>
                </LoginWrapper>
            </SidebarLogin>
        </Background>
    )
}

const Background = styled.section`
  height: 100vh;
  width: calc(100vw - 700px);
  background: url(${backgroundImage});
`

const SidebarLogin = styled.aside`
  position: absolute;
  right: 0;
  height: 100vh;
  width: 700px;
  background: ${COLORS.white};
  border-left: ${SIZES.xxs} solid ${COLORS.green2};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  @media (max-width: 1152px) {
    width: 100%;
    background: url(${backgroundImage});
  }
`

const LoginWrapper = styled.div`
  width: 500px;

  @media (max-width: 1152px) {
    width: 50%;
    padding: ${SIZES.lg};
    background: ${COLORS.white};
    border-radius: ${SIZES.lg};
    border: ${SIZES.xxs} solid ${COLORS.green2};
  }

  @media (max-width: 720px) {
    width: 70%;
  }
`
export default Login