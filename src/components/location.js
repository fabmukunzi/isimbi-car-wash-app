import { Form, Select } from 'antd';
import { Helmet } from 'react-helmet';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

const LocationAutoCompleteInput = ({ onLocationSelect }) => {
  const {
    ready,
    suggestions: { data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });

  const handleSearch = (value) => {
    setValue(value);
  };

  const handleChooseLocation = async (address) => {
    setValue(address);
    const result = await getGeocode({ address });
    const { lat, lng } = getLatLng(result[0]);
    const data = { latitude: lat, longitude: lng, location: address };
    onLocationSelect(data);
    clearSuggestions();
  };

  return (
    <Form.Item name="location" >
      <Helmet>
        <script
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC63nofXo7TrdUawWh8VManHU2yowVc_Mc&libraries=places`}
        />
      </Helmet>
      <Select
        placeholder="Type location name.."
        disabled={!ready}
        showSearch
        onSearch={handleSearch}
        allowClear
        onSelect={handleChooseLocation}
        className="w-full"
        size="large"
      >
        {data.map((dt) => {
          return (
            <Select.Option key={dt.id} value={dt.description}>
              {dt.description}
            </Select.Option>
          );
        })}
      </Select>
    </Form.Item>
  );
};

export default LocationAutoCompleteInput;
