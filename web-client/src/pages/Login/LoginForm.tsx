import { FC, useState } from 'react'
import {Button, Form, Input, notification} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import COLORS from '../../shared/constants/Colors.ts'
import {StyledForm} from "./styles.ts"
import REQUESTS, {POST, TOKEN_NAME} from "../../shared/constants/Requests.ts"
import Request from "../../shared/utils/Request.ts"
import {useNavigate} from "react-router-dom"
import PATH from "../../shared/constants/Path.ts";

interface Props {

}

const LoginForm: FC<Props> = ({}) => {

    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate()

    const formRule = [{
        required: true,
        message: 'Заповніть це поле!'
    }]

    const onFinish = ({username, password}: any) => {
        setLoading(true)
        const loginData = {
            username,
            password
        }
        Request(POST, REQUESTS.LOGIN, loginData)
            .then((data) => {
                localStorage.setItem(TOKEN_NAME, data.data.token)
                navigate(`/${PATH.ADMIN}`)
            })
            .catch(() => {
                notification.error({
                    message: 'Помилка авторизації',
                    description: 'Неправильна електронна пошта або пароль',
                    placement: 'topRight',
                })
            })
            .finally(() => {
                setLoading(false)
            })
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

export default LoginForm