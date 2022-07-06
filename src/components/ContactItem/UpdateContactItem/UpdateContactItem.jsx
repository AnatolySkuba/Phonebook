import { useState, useEffect } from 'react';
import {
  useGetContactsQuery,
  useUpdateContactMutation,
} from 'redux/contacts/contactsApi';
import { Button, TextField, Box, CircularProgress } from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';

export default function UpdateContactItem({
  id,
  currentName,
  currentNumber,
  updateContact,
}) {
  const [name, setName] = useState(currentName);
  const [number, setNumber] = useState(currentNumber);
  const { data } = useGetContactsQuery();
  const [updateContactApi, { isLoading, isSuccess, isError, error }] =
    useUpdateContactMutation();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleSubmit = e => {
    e.preventDefault();

    if (data.some(contact => contact.name === name && name !== currentName)) {
      enqueueSnackbar('This contact is already in the contacts', {
        variant: 'error',
      });
    } else if (name === currentName && number === currentNumber) {
      updateContact(id);
    } else {
      updateContactApi({
        id: id,
        name: name,
        number: number,
      });
    }
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (isSuccess) {
      updateContact(id);
      enqueueSnackbar('Contact successfully updated', {
        variant: 'success',
      });
    }

    if (isError && error?.originalStatus === 400) {
      enqueueSnackbar('Error updating contact', {
        variant: 'error',
      });
    } else if (isError && error?.status === 'FETCH_ERROR') {
      enqueueSnackbar('Internet is disconnected', {
        variant: 'error',
      });
    } else if (isError) {
      enqueueSnackbar('Something went wrong, please try again later', {
        variant: 'error',
      });
    }
  }, [
    closeSnackbar,
    isSuccess,
    isError,
    enqueueSnackbar,
    error?.originalStatus,
    error?.status,
    updateContact,
    id,
  ]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      // autoComplete="off"
      sx={{
        display: 'flex',
        alignItems: 'baseline',
        padding: '0rem',
      }}
    >
      <TextField
        variant="standard"
        size="small"
        margin="normal"
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handleChange}
        sx={{
          width: `${Math.max(name.length / 1.75, 1)}rem`,
        }}
        required
      />
      <TextField
        variant="standard"
        size="small"
        margin="normal"
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handleChange}
        sx={{
          width: `${Math.max(number.length / 1.75, 1)}rem`,
          m: '0 1rem',
        }}
        required
      />
      <Button
        variant="contained"
        type="submit"
        margin="normal"
        sx={{ width: '12rem', m: '0 1rem' }}
        endIcon={
          isLoading ? (
            <CircularProgress size={16} thickness={6} color="inherit" />
          ) : (
            <UpdateIcon />
          )
        }
      >
        Update contact
      </Button>
    </Box>
  );
}

UpdateContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  currentName: PropTypes.string.isRequired,
  currentNumber: PropTypes.string.isRequired,
  updateContact: PropTypes.func.isRequired,
};
