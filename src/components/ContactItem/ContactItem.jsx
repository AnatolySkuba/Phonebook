import { useState, useEffect } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import PropTypes from 'prop-types';
import { IconButton, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack';

export default function ContactItem({ id, name, number }) {
  const [loading, setLoading] = useState(false);
  const [deleteContact, { isLoading, isSuccess, isError }] =
    useDeleteContactMutation();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    isSuccess &&
      enqueueSnackbar('Contact successfully deleted', {
        variant: 'success',
      });
    isError &&
      enqueueSnackbar('Something went wrong, please try again later', {
        variant: 'error',
      });
  }, [closeSnackbar, isSuccess, isError, enqueueSnackbar]);

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
      <span>
        {name}: {number}
      </span>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
