import { Button, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';
import googleIcon from '../../assets/images/Google.svg';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/auth/login';

const Login = () => {
  const { Text } = Typography;
  const dispatch = useDispatch();
  const {isLoading}=useSelector((state)=>state.login)
  const onFinish = async (values) => {
    await dispatch(login(values));
  };
  return (
    <div className="classic">
      <div className="flex backdrop-blur-md h-screen py-28 flex-col items-center gap-6">
        {/* {contextHolder} */}
        <Text className="text-center font-bold text-2xl">
          <span className="text-white">Welcome Back , </span>Login
        </Text>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          layout="vertical"
          autoComplete="on"
          className="flex items-center flex-col"
        >
          <Form.Item
            // label="Email"
            name="email"
            rules={[
              { type: 'email', message: 'Please input a valid email!' },
              { required: true, message: 'Please input your email!' },
            ]}
          >
            <Input className="py-2 w-72" placeholder="Email" />
          </Form.Item>

          <Form.Item
            // label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className="py-2 w-72" placeholder="Password" />
          </Form.Item>

          <Link href="#" className="-mt-3 mb-5 -mr-44 text-white">
            Forgot password?
          </Link>

          <Form.Item>
            <Button
              className="rounded-lg w-72 h-10 bg-blue-500 font-bold"
              type="primary"
              htmlType="submit"
              loading={isLoading}
              // onClick={() => router.push('/dashboard')}
            >
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              className="rounded-lg w-72 h-10 bg-white gap-2 font-bold flex justify-center items-center"
              // onClick={() =>
              //   (window.location.href = `${BASE_API_URL}/users/auth/google`)
              // }
            >
              <Text className="text-blue-500 text-md">
                Sign in With Google{' '}
              </Text>
              <img alt="google" height={25} width={25} src={googleIcon} />
            </Button>
          </Form.Item>
          <Link to="/signup" className="text-white">
            Create an account
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
