import { Input } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <Input
        placeholder="Search name"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </>
  );
};

export default Filter;
