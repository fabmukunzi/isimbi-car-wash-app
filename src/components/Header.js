import React, { useState } from 'react';
import Profile from './profile';
import profile from '../assets/images/0459df7b4b1a4a42c676584e5e865748.jpg';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);
  const { Text } = Typography;
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center mt-4 mx-4">
        <Text
          className="text-xl font-bold text-primary"
          onClick={() => {
            navigate('/');
          }}
        >
          K CAR WASH
        </Text>
        <img
          alt="default profile"
          src={profile}
          className="h-10 w-10 rounded-full"
          onClick={() => setOpen(true)}
        />
        {/* <Link to="/login" className="font-bold">
          Login
        </Link> */}
      </div>
      <Profile open={open} setOpen={setOpen} />
    </div>
  );
};

export default Header;
