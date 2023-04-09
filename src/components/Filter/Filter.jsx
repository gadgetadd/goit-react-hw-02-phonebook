import {} from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <label>
      <span>Find contacts by name</span>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};
