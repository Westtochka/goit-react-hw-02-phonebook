// import PropTypes from 'prop-types';
import {AddNewContact} from '../AddNewContact/AddNewContact'
export const ContactList =  ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <AddNewContact
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}/>
    ))}
  </ul>
)

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.number.isRequired
//   })),
//   onDeleteContact: PropTypes.func.isRequired
// }

// export default ContactList;