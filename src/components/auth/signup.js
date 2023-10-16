import { Button, Form, Input, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../../assets/images/Google.svg';

const Signup = () => {
  const { Text } = Typography;
  return (
    <div className="flex classic flex-col items-center gap-3">
      {/* {contextHolder} */}
      <Text className="text-center font-bold text-2xl">Create an account</Text>
      <Form
        name="basic"
        //   initialValues={{ remember: true }}
        //   onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        layout="vertical"
        autoComplete="on"
        className="flex items-center flex-col"
      >
        <Form.Item
          label="First Name"
          name="firstname"
          rules={[{ required: true, message: 'Please input your firstname!' }]}
        >
          <Input className="w-72" />
        </Form.Item>
        <Form.Item
          label="Last name"
          name="lastname"
          rules={[{ required: true, message: 'Please input your lastname!' }]}
        >
          <Input className="w-72" />
        </Form.Item>
        {/* <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { min: 10, message: 'Please input a valid phone number!' },
              { required: true, message: 'Please input your phone number!' },
            ]}
          >
            <Input className="w-72" />
          </Form.Item> */}
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type: 'email', message: 'Please input a valid email!' },
            { required: true, message: 'Please input your email!' },
          ]}
        >
          <Input className="w-72" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className="w-72" />
        </Form.Item>
        <Form.Item>
          <Button
            className="rounded-lg w-72 h-10 bg-blue-500 font-bold"
            type="primary"
            htmlType="submit"
            // loading={isLoading}
          >
            Signup
          </Button>
        </Form.Item>
        <Form.Item>
          <Link
            className="rounded-lg w-72 h-10 bg-white gap-2 font-bold flex justify-center items-center"
            href="https://isimbi-car-wash-bn.onrender.com/users/auth/google"
          >
            <Text className="text-blue-500 text-md">Sign up With Google </Text>
            <img alt="image1" height={25} width={25} src={googleIcon} />
          </Link>
        </Form.Item>
        <Text>
          Already a member? <Link to="/login">Login</Link>
        </Text>
      </Form>
    </div>
  );
};

export default Signup;
