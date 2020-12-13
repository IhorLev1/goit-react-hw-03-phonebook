import s from '../Form/Form.module.css';
import propTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={s.input}>
      Find contact by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: propTypes.string,
  onChange: propTypes.func,
};
export default Filter;
