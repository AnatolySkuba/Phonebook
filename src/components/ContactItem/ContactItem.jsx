import { useState, useEffect } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import UpdateContactItem from './UpdateContactItem/UpdateContactItem';
import PropTypes from 'prop-types';
import { IconButton, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useSnackbar } from 'notistack';

export default function ContactItem({ id, name, number }) {
  const [loading, setLoading] = useState(false);
  const [updateContactId, setUpdateContactId] = useState('');
  const [deleteContact, { isLoading, isSuccess, isError, error }] =
    useDeleteContactMutation();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const updateContact = id => {
    updateContactId ? setUpdateContactId('') : setUpdateContactId(id);
  };

  useEffect(() => {
    isSuccess &&
      enqueueSnackbar('Contact successfully deleted', {
        variant: 'success',
      });
    if (isError && error?.originalStatus === 404) {
      enqueueSnackbar("Sorry, we can't find this page", {
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
  ]);

  useEffect(() => {
    isLoading && setLoading(true);
  }, [isLoading]);

  return (
    <>
      <IconButton
        aria-label="delete"
        onClick={() => deleteContact(id)}
        color="primary"
        sx={{ m: '0 1rem 0 0 ', p: '0' }}
      >
        {loading ? (
          <CircularProgress size={16} thickness={6} />
        ) : (
          <DeleteIcon />
        )}
      </IconButton>
      <IconButton
        aria-label="update"
        onClick={() => updateContact(id)}
        color="primary"
        sx={{ m: '0 1rem 0 0 ', p: '0' }}
      >
        {updateContactId ? <AccessTimeIcon /> : <UpdateIcon />}
      </IconButton>
      {updateContactId ? (
        <UpdateContactItem
          id={id}
          currentName={name}
          currentNumber={number}
          updateContact={updateContact}
        />
      ) : (
        <span>
          {name}: {number}
        </span>
      )}
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
