import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from 'redux/phonebook';
import TextField from '@mui/material/TextField';

import { InputLabel } from './ContactFilter.styled';

const ContactFilter = () => {
  const filter = useSelector(selectors.getFilter);
  const dispatch = useDispatch();

  return (
    <InputLabel>
      Filter contacts by name:
      <TextField
        id="standard-basic"
        label="Enter name..."
        name="filter"
        value={filter}
        onChange={event =>
          dispatch(actions.changeFilter(event.currentTarget.value))
        }
        variant="standard"
        fullWidth
      />
    </InputLabel>
  );
};

export default ContactFilter;
