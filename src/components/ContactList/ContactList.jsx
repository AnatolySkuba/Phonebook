import ContactItem from 'components/ContactItem/ContactItem';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import PropTypes from 'prop-types';
import { List, ListItem } from '@mui/material';

export default function ContactList({ filter }) {
  const { data } = useGetContactsQuery();

  const contactsFiltered = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (contactsFiltered) {
    return (
      <List sx={{ mt: '0.5rem' }}>
        {contactsFiltered.map(({ id, name, number }) => (
          <ListItem key={id}>
            <ContactItem id={id} name={name} number={number} />
          </ListItem>
        ))}
      </List>
    );
  }
}

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
};
