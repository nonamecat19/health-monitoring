// @ts-ignore
import backgroundImage from '../../shared/assets/login-background.jpg'
import styled from "styled-components";
import {Alert, Form} from "antd";
import SIZES from "../../shared/constants/Sizes.ts";
import COLORS from "../../shared/constants/Colors.ts";

export const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: ${SIZES.sm}
  }
`

export const Background = styled.section`
  height: 100vh;
  width: calc(100vw - 700px);
  background: url(${backgroundImage});
`

export const SidebarLogin = styled.aside`
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

export const LoginWrapper = styled.div`
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

export const ErrorAlert = styled(Alert)`
  position: absolute;
  bottom: ${SIZES.md};
  right: ${SIZES.md};
  width: 500px;
`