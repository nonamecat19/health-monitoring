import {FC, FormEvent, useState} from 'react'
import {Button, Form, Input} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import COLORS from '../../shared/constants/Colors.ts'
import {ErrorAlert, StyledForm} from "./styles.ts"
import {GoogleLogin} from "@react-oauth/google";

interface Props {

}

const LoginForm: FC<Props> = ({}) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false);
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
    }

    const formRule = [{
        required: true,
        message: 'Заповніть це поле!'
    }]

    const onFinish = (values: any) => {
        console.log('Success:', values)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    return (
        <>
            <StyledForm
                //@ts-ignore
                onSubmit={handleSubmit}
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

                <GoogleLogin
                    onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                        setIsError(false)

                    }}
                    onError={() => {
                        setIsError(true)
                    }}

                />

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