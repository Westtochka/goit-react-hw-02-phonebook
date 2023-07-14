// import PropTypes from 'prop-types';

export const Filter = ({ id, name, number, onDeleteContact, createUser }) => (
  //  {id, name, number }=this.createUser
  <li>
      <p>{name}: <span>{number}</span></p> 
      <button type="button"onClick ={() => onDeleteContact(id)}>Delete</button>
    </li>
)

// AddNewContact.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired
// }

export default Filter;