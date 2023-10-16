import { Button, Typography } from 'antd';
import React, { useState } from 'react';
import profile from '..//assets/images/0459df7b4b1a4a42c676584e5e865748.jpg';
import { formatDate } from '../utils/formatDate';
import smallCar from '../assets/images/small.svg';
import semitrack from '../assets/images/semi truck.svg';
import buses from '../assets/images/buses.svg';
import track from '../assets/images/track.svg';
import car1 from '../assets/images/car1.png';
import { Link } from 'react-router-dom';
import { washData } from '../utils/washInfo';
import Footer from '../components/Footer';

const HomePage = () => {
  const { Text } = Typography;
  const today = new Date();
  const [activeType, setActiveType] = useState('Small/Suv');
  const carTypes = [
    { name: 'Small/Suv', image: smallCar },
    { name: 'Tracks', image: track },
    { name: 'Bus', image: buses },
    { name: 'Semi-Truck', image: semitrack },
  ];
  return (
    <>
      <div className="mx-6 pb-16">
        <div className="flex justify-between items-center my-4">
          <Text className="text-xl font-bold text-primary">K CAR WASH</Text>
          {/* <img
      alt="default profile"
      src={profile}
      className="h-10 w-10 rounded-full"
    /> */}
          <Link to="/login" className="font-bold">
            Login
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <Text className="font-bold">
            Hello There! <br />
            {/* James */}
          </Text>
          <Text className="font-bold">{formatDate(today)}</Text>
        </div>
        <div className="bg-1 h-40 w-[95vw] mx-auto"></div>
        <div>
          <Text className="font-bold">Your Car Type</Text>
          <div className="flex justify-between">
            {carTypes.map((car) => (
              <div
                className={`${
                  activeType === car.name
                    ? 'bg-primary text-white'
                    : 'bg-white text-black'
                } flex gap-2 p-1 rounded-lg`}
                onClick={() => setActiveType(car.name)}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className={`${activeType === car.name ? 'invert' : ''}`}
                />
                <Text
                  className={`${
                    activeType === car.name ? 'invert' : ''
                  } truncate w-full`}
                >
                  {car.name}
                </Text>
              </div>
            ))}
          </div>
          <div className="my-4 flex justify-between">
            {Array(2)
              .fill(null)
              .map(() => (
                <div className="relative">
                  <img src={car1} alt="car" />
                  <div className="absolute bottom-0 backdrop-blur-lg w-full mx-auto rounded-t-2xl p-3">
                    <div className="flex justify-between mx-2">
                      <Text className="text-white">
                        A QUICK <br />{' '}
                        <span className="font-sm">Exterior Care</span>
                      </Text>
                      <Text className="text-white">
                        RWF
                        <br />
                        <span>5000</span>
                      </Text>
                    </div>
                    <Button className="bg-primary text-white" block>
                      Book
                    </Button>
                  </div>
                </div>
              ))}
          </div>
          <div>
            {washData?.map((data, i) => (
              <div className="bg-primary flex gap-3 my-2 p-2 rounded-l-2xl rounded-br-[3rem] rounded-tr-2xl">
                <Text className="font-bold text-white text-lg">{i + 1}</Text>
                <Text className="text-white">
                  <span className="font-bold text-lg">{data.title}</span>
                  <br />
                  {data.content}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
