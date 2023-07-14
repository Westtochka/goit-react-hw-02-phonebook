import {ContactItem} from '../ContactItem/ContactItem'
export const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          contact={{ id, name, number }}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
  
  export default ContactList;