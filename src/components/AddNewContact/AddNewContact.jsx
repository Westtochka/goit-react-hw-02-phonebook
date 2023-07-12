// import PropTypes from 'prop-types';

export const AddNewContact = ({ id, name, number, onDeleteContact }) => (
    <li>
      <p>{name}: <span>{number}</span></p> 
      <button
        type="button"
        onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
)

// AddNewContact.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired
// }

export default AddNewContact;