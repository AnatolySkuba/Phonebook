import ContactItem from 'components/ContactItem/ContactItem';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactList({ filter }) {
  const { data } = useGetContactsQuery();

  const contactsFiltered = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (contactsFiltered) {
    return (
      <ul>
        {contactsFiltered.map(({ id, name, number }) => (
          <li className={s.li} key={id}>
            <ContactItem id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
};
