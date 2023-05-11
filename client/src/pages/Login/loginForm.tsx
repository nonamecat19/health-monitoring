import {FC, useState} from 'react'
import {Button, Form, Input} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import COLORS from '../../shared/constants/Colors.ts'
import {ErrorAlert, StyledForm} from "./styles.ts"
import REQUESTS, {POST, TOKEN_NAME} from "../../shared/constants/Requests.ts"
import Request from "../../shared/utils/Request.ts"
import {useNavigate} from "react-router-dom"
interface Props {

}

const LoginForm: FC<Props> = ({}) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)

    const navigate = useNavigate()

    const formRule = [{
        required: true,
        message: 'Заповніть це поле!'
    }]

    const onFinish = (values: any) => {

        const loginData = {
            email: values.username,
            password: values.password
        }
        setLoading(true)
        Request(POST, REQUESTS.LOGIN, loginData)
            .then((data) => {
                return data.data.token
            })
            .catch(() => {

            })
            .then((token) => {
                localStorage.setItem(TOKEN_NAME, token)
                setLoading(false)
                navigate('/')
            })
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <>
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

            {
                isError &&
                <ErrorAlert
                    message="Error Text"
                    description="Error Description Error Description Error Description Error Description Error Description Error Description"
                    type="error"
                    closable
                    onClose={() => setIsError(false)}
                />
            }

        </>
    )
}


export default LoginForm