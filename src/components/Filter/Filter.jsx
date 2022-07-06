import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

export default function Filter({ filter, handleChange }) {
  return (
    <TextField
      label="Find contacts by name"
      size="small"
      type="text"
      name="filter"
      value={filter}
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      onChange={e => handleChange(e.target.value)}
      sx={{ width: '22rem' }}
    />
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
