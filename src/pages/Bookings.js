import React, { useEffect, useState } from 'react';
import Map from '../components/Map';
import { Card, Typography } from 'antd';
import { formatDate } from '../utils/formatDate';
import { AiFillCar } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { getCurrentDistance } from '../utils/distance';
import { formatTime } from '../utils/formatTime';

const Bookings = () => {
  const { Text } = Typography;
  const [estimatedArrivalTime, setEstimatedArrivalTime] = useState(null);

  useEffect(() => {
    getCurrentDistance()
      .then((time) => {
        setEstimatedArrivalTime(time);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])
  return (
    <div className="mb-16">
      <div className="p-3 border-2 border-secondary_dark mx-2 rounded-md">
        <Map />
        <div>
          {Array(5)
            .fill(null)
            .map(() => (
              <Card size="small" className="border border-b-4 border-r-2 border-secondary_dark bg-secondary flex flex-col my-4">
                <Text className="font-bold">{formatDate('10/19/2023')}</Text>
                <div className="flex items-center gap-2 font-semibold">
                  <AiFillCar /> <span>RAD 546 F</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineLocationMarker /> <span>7529 E. Pecan St.</span>
                </div>
                <Text>Washer: KAMANZI Guillet</Text>
                <br />
                <Text>Status: Serving</Text>
                <br />
                <Text>Est. Arrival Time: {formatTime(estimatedArrivalTime)}</Text>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
