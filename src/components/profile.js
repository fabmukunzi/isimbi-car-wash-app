import React from 'react';
import {
  Button,
  Drawer,
  Form,
  Image,
  Input,
  Typography,
} from 'antd';
import { AiFillDelete } from 'react-icons/ai';
import { TbLogout2 } from 'react-icons/tb';
import profile from '../assets/images/0459df7b4b1a4a42c676584e5e865748.jpg';
const Profile = ({ open, setOpen }) => {
  const { Text } = Typography;
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer
        title="Profile"
        className="backdrop-blur-md"
        width={300}
        height={100}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <div size="small" className="flex justify-between">
          <Image src={profile} className="rounded-xl w-full h-24" />
          <div className="text-xl">
            {/* {user?.role !== 'Super Admin' && ( */}
            <Button
              // onClick={showConfirm}
              type="primary"
              icon={<AiFillDelete />}
              className="bg-secondary shadow-md flex flex-row-reverse items-center text-xs justify-between gap-2 text-black font-semibold"
            >
              Delete Account
            </Button>
            {/* )} */}
            <Text>Account Since</Text>
            <br />
            <Text className="text-primary">12 Feb, 2023</Text>
          </div>
        </div>
        <Form
          layout="vertical"
          // onFinish={handleUpdate} initialValues={user}
        >
          <div className="flex gap-4 justify-between">
            <Form.Item label="First name" name="firstname">
              <Input />
            </Form.Item>
            <Form.Item label="Last name" name="lastname">
              <Input />
            </Form.Item>
          </div>
          <div className="">
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Telephone" name="phone">
              <Input />
            </Form.Item>
          </div>
          <div className="flex items-center w-full justify-between">
            {/* {user?.passowrd && (
                <Button
                  onClick={() => setShowChangePassword(true)}
                  className="cursor-pointer bg-primary text-white"
                >
                  Change Password
                </Button>
              )} */}
          </div>
          <div className="flex justify-center gap-5">
            <Button
              htmlType="submit"
              // loading={uload}
              className="bg-primary text-white w-32 h-8 rounded-3xl"
            >
              Save
            </Button>
            <Button
              onClick={() => setOpen(false)}
              className="w-32 h-8 rounded-3xl"
            >
              Cancel
            </Button>
          </div>
        </Form>
        <Button
          // onClick={showConfirm}
          type="primary"
          icon={<TbLogout2 size={20} color="#0077B6" />}
          className="bg-secondary shadow-md flex flex-row items-center text-xs mt-10 border border-primary justify-between gap-2 text-black font-semibold"
        >
          Logout
        </Button>
      </Drawer>
    </>
  );
};
export default Profile;
