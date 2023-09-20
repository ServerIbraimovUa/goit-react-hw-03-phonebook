import { List } from './ContactList.styled';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </List>
  );
};

export default ContactList;
