// import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
 return  <label>
    Find contacts by name
    <input type="text" value={filter} onChange={onChange}/>
  </label>
}


export default Filter;