import { Typography } from 'antd';
import React from 'react';
import { TiThMenu } from 'react-icons/ti';
import { BiSolidTagAlt } from 'react-icons/bi';
import { GoHomeFill } from 'react-icons/go';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const { Text } = Typography;
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="fixed shadow-lg flex justify-around items-center bottom-0 h-16 w-screen bg-white">
      <div className="flex flex-col items-center" onClick={() => navigate('/')}>
        <GoHomeFill
          size={30}
          color={`${location.pathname === '/' ? '#0077B6' : ''}`}
        />
        <Text className={`${location.pathname === '/' ? 'text-primary' : ''}`}>
          Home
        </Text>
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() => navigate('/bookings')}
      >
        <BiSolidTagAlt
          size={30}
          className="rotate-[270deg]"
          color={`${location.pathname === '/bookings' ? '#0077B6' : ''}`}
        />
        <Text
          className={`${
            location.pathname === '/bookings' ? 'text-primary' : ''
          }`}
        >
          Bookings
        </Text>
      </div>
      <div className="flex flex-col items-center" onClick={() => navigate('/menu')}>
        <TiThMenu
          size={30}
          color={`${location.pathname === '/menu' ? '#0077B6' : ''}`}
        />
        <Text
          className={`${location.pathname === '/menu' ? 'text-primary' : ''}`}
        >
          Menu
        </Text>
      </div>
    </div>
  );
};

export default Footer;
