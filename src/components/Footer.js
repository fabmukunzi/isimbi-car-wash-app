import { Typography } from 'antd';
import React from 'react';
import { ImHome, ImMenu, ImTarget } from 'react-icons/im';

const Footer = () => {
  const { Text } = Typography;
  return (
    <div className="fixed shadow-lg flex justify-around items-center bottom-0 h-16 w-screen bg-white">
      <div>
        <ImHome />
        <Text>Home</Text>
      </div>
      <div>
        <ImTarget />
        <Text>Booking</Text>
      </div>
      <div>
        <ImMenu />
        <Text>Menu</Text>
      </div>
    </div>
  );
};

export default Footer;
