import { Typography } from 'antd';
import React from 'react';
import { TiThMenu } from 'react-icons/ti';
import { BiSolidTagAlt } from 'react-icons/bi';
import { GoHomeFill } from 'react-icons/go';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Menu from './menu';

const Footer = () => {
  const { Text } = Typography;
  const location = useLocation();
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const item = queryParams.get('item');
  return (
    <div className="fixed shadow-lg flex justify-around items-center bottom-0 h-16 w-screen bg-white">
      <div className="flex flex-col items-center" onClick={() => navigate('/')}>
        <GoHomeFill
          size={27}
          color={`${
            location.pathname === '/' || location.pathname === '/book'
              ? '#0077B6'
              : ''
          }`}
        />
        <Text
          className={`${
            location.pathname === '/' || location.pathname === '/book'
              ? 'text-primary'
              : ''
          }`}
        >
          Home
        </Text>
      </div>
      <div
        className="flex flex-col items-center"
        onClick={() => navigate('/bookings')}
      >
        <BiSolidTagAlt
          size={27}
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
      <div
        className="flex flex-col items-center"
        onClick={() => navigate('/?item=menu')}
      >
        {item && <Menu />}
        <TiThMenu size={27} color={`${item === 'menu' ? '#0077B6' : ''}`} />
        <Text className={`${item === 'menu' ? 'text-primary' : ''}`}>Menu</Text>
      </div>
    </div>
  );
};

export default Footer;
