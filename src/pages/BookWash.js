import React, { useState } from 'react';
import FormWizard from 'react-form-wizard-component';
import 'react-form-wizard-component/dist/style.css';
import { MdAddLocation, MdOutlineMiscellaneousServices } from 'react-icons/md';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import { Button, Form, Input, Select, Typography } from 'antd';
import Map from '../components/Map';
import { getGeolocationInfo } from '../utils/distance';
import LocationAutoCompleteInput from '../components/location';
import { useForm } from 'antd/es/form/Form';

const BookWash = () => {
  const { Text, Title } = Typography;
  const [form] = useForm();
  const [selectedLocation, setSelectedLocation] = useState('');
  const [open, setOpen] = useState(false);
  const [isMap, setIsMap] = useState(false);
  const [selectedLocationName, setSelectedLocationName] = useState('');
  const onLocationChange = (location) => {
    setSelectedLocation(location);
  };

  getGeolocationInfo(selectedLocation, (error, address) => {
    if (error) {
      console.error('Error:', error);
    } else {
      setSelectedLocationName(address);
    }
  });
  console.log(selectedLocation);
  const handleComplete = () => {
    console.log('Form completed!');
    // Handle form completion logic here
  };
  return (
    <div className="mx-4 mb-16">
      <div className="flex justify-between w-[90%] mx-auto">
        <MdAddLocation size={27} />
        <MdOutlineMiscellaneousServices size={27} />
        <BsFillPatchCheckFill size={27} />
      </div>
      <FormWizard
        shape="circle"
        color="#0077B6"
        stepSize="xs"
        onComplete={handleComplete}
      >
        <FormWizard.TabContent title="Address" icon={<AiFillCheckCircle />}>
          <div className="p-4 border border-secondary_dark rounded-lg">
            <Title className="text-lg">Where can we find you?</Title>
            <Form layout="horizontal">
              <Form.Item name="names" label="Names">
                <Input
                  placeholder="eg. Patrick Mugisha"
                  className="bg-scondary"
                />
              </Form.Item>
              <Form.Item name="phone" label="Tel. Number">
                <Input placeholder="eg. 0780403244" className="bg-scondary" />
              </Form.Item>
              <Form.Item name="plateNumber" label="Plate Number">
                <Input placeholder="eg. RAE305B" className="bg-scondary" />
              </Form.Item>
              <Form.Item label="Address" name="location">
                <div className='flex gap-4 mb-4'>
                <Button onClick={()=>setIsMap(false)} className={`${isMap?'':'bg-primary text-white'}`}>Fill it in</Button>
                <Button onClick={()=>setIsMap(true)} className={`${isMap?'bg-primary text-white':''}`}>Use Map</Button>
                </div>
                {!isMap ? (
                  <LocationAutoCompleteInput
                    onLocationSelect={(values) => {
                      form.setFieldsValue(values);
                    }}
                  />
                ) : (
                  <div className="h-72 border-2 border-primary">
                    <Input value={selectedLocationName} disabled/>
                    <Map onLocationChange={onLocationChange} />
                  </div>
                )}
              </Form.Item>
            </Form>
          </div>
        </FormWizard.TabContent>
        <FormWizard.TabContent title="Services" icon={<AiFillCheckCircle />}>
          <div className="p-4 border border-secondary_dark rounded-lg">
            <Title className="text-lg">What type of service?</Title>
            <Form layout="vertical">
              <Form.Item name="names" label="Service">
                <Select
                  defaultValue="A Quick Exterior Care"
                  options={[
                    { label: 'A Quick Exterior Care', value: 'quick' },
                    { label: 'Exterior and Interior Care', value: 'hybrid' },
                  ]}
                  className="bg-scondary"
                />
              </Form.Item>
              <Form.Item name="cartype" label="Cart Type">
                <Select
                  defaultValue="Small/Suv"
                  options={[
                    { label: 'Small/Suv', value: 'small' },
                    { label: 'Buses', value: 'buses' },
                    { label: 'Semi-truck', value: 'semitrack' },
                    { label: 'Truck', value: 'truck' },
                  ]}
                  className="bg-scondary"
                />
              </Form.Item>
              <Form.Item name="times" label="Times">
                <Select
                  defaultValue="Once"
                  options={[
                    { label: 'Once', value: 'once' },
                    { label: 'Regulary', value: 'regular' },
                  ]}
                  className="bg-scondary"
                />
              </Form.Item>
              <div className="text-primary">
                <p>(Get 20% Discount for Making A Recurring Order)</p>
                <div className="flex justify-between items-center">
                  <p className="text-black font-bold my-4">Subtotal :</p>{' '}
                  <p>5000 RWF</p>
                </div>
              </div>
            </Form>
          </div>
        </FormWizard.TabContent>
        <FormWizard.TabContent
          title="Confirmation"
          icon={<AiFillCheckCircle />}
        >
          <div className="flex flex-col items-center">
            <Title className="text-primary text-xl font-bold">
              One Step Away!
            </Title>
            <Title className="text-lg my-0">
              To Confirm A Wash Pay 2,000 Rwf
            </Title>
            <br />
            <span>It will be deduced from your sub-total</span>
            <AiFillCheckCircle size={80} color="#0077B6" />
            <span className="mb-10">
              To Confirm Your Wash Click Finish and then Check your phone for
              popup to pay or Dial{' '}
              <span className="font-bold">*182*7*1*PIN#</span> to Confirm
              Payment
            </span>
          </div>
        </FormWizard.TabContent>
      </FormWizard>
    </div>
  );
};

export default BookWash;
