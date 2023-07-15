import {ContactItem} from '../ContactItem/ContactItem'
import { List } from "./ContactList.style";

export const ContactList = ({ contacts, onDeleteContact }) => (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          contact={{ id, name, number }}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
  
  export default ContactList;