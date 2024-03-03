import {FC, useState} from 'react'
import {Button, Form, Input, notification} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import {COLORS, PATH} from '../../shared/constants'
import {StyledForm} from "./styles.ts"
import {useNavigate} from "react-router-dom"

export const LoginForm: FC = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const formRule = [{
    required: true,
    message: 'Заповніть це поле!'
  }]

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const onFinish = ({username, password}: any) => {
    setLoading(true)
    // const loginData = {
    //   username,
    //   password
    // }
    // Request(POST, REQUESTS.LOGIN, loginData)
    //     .then((data) => {
    //         localStorage.setItem(TOKEN_NAME, data.data.token)
    //         navigate(`/${PATH.ADMIN}`)
    //     })
    //     .catch(() => {
    //         notification.error({
    //             message: 'Помилка авторизації',
    //             description: 'Неправильна електронна пошта або пароль',
    //             placement: 'topRight',
    //         })
    //     })
    //     .finally(() => {
    //         setLoading(false)
    //     })
    navigate(`/${PATH.ADMIN}`)
  }

  const onFinishFailed = () => {
    notification.info({
      message: 'Помилка авторизації',
      description: 'Заповніть всі поля',
      placement: 'topRight',
    })
  }

  return (
    <StyledForm
      className="login-form"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={formRule}
      >
        <Input
          prefix={<UserOutlined/>}
          placeholder="Електронна пошта"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={formRule}
      >
        <Input.Password
          prefix={<LockOutlined/>}
          placeholder="Пароль"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          color={COLORS.green1}
          size='large'
          block
          loading={loading}
        >
          Увійти
        </Button>
      </Form.Item>
    </StyledForm>
  )
}
