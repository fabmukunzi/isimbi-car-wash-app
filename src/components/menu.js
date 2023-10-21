import React, { useState } from 'react';
import { Button, Col, Drawer, Image, Row, Typography } from 'antd';
import { TbLogout2, TbReportSearch } from 'react-icons/tb';
import profile from '../assets/images/0459df7b4b1a4a42c676584e5e865748.jpg';
import { GoHome } from 'react-icons/go';
import { MdOutlineContactSupport, MdOutlinePrivacyTip } from 'react-icons/md';
const Menu = () => {
  const [open, setOpen] = useState(true);
  const { Text } = Typography;

  const onClose = () => {
    window.location.replace('/');
    setOpen(false);
  };
  const items = [
    { name: 'Home', path: '/', icon: <GoHome size={23} /> },
    { name: 'Reports', path: '/reports', icon: <TbReportSearch size={23} /> },
    {
      name: 'Private Policy',
      path: '/policy',
      icon: <MdOutlinePrivacyTip size={23} />,
    },
    {
      name: 'Help & Support',
      path: '/support',
      icon: <MdOutlineContactSupport size={23} />,
    },
  ];
  return (
    <>
      <Drawer
        title="Menu"
        className="backdrop-blur-md"
        width={300}
        height={50}
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Row gutter={[8, 8]} className="w-full">
          <div className="bg-secondary w-full flex items-center border border-primary rounded-md">
            <Col className="col-span-2">
              <Image
                src={profile}
                alt="image"
                width={52}
                height={52}
                className="rounded-full object-cover"
              />
            </Col>
            <Col className="text-[10px] col-span-3 flex flex-col font-light text-white">
              <Text className="text-[10px] text-white">Client</Text>
              <Text className="text-[10px] font-semibold w-full">
                {/* {user?.firstname + ' ' + user?.lastname} */}
                Fabrice Mukunzi
              </Text>
              <Text
                className="text-[10px] font-semibold w-full truncate"
                copyable
              >
                mukunzifabrice77@gmail.com
              </Text>
              <Text className="text-[10px] font-semibold w-full" copyable>
                +250780403244
              </Text>
              <Text
                className="text-[12px] cursor-pointer text-primary"
                // onClick={() => setIsOpen(true)}
              >
                My Account
              </Text>
            </Col>
          </div>
        </Row>
        <div>
          {items.map((item) => (
            <div
              className="flex flex-col justify-center my-2"
              onClick={() => {
                window.location.replace(item.path);
              }}
            >
              <div className='flex items-center gap-3'>{item.icon}
              <Text>{item.name}</Text></div>
              <div className='p-[0.01rem] my-3 w-full bg-secondary_dark'></div>
            </div>
          ))}
        </div>
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
export default Menu;
