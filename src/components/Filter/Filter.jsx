// import PropTypes from 'prop-types';
import {Input, Label} from './Filter.style'

export const Filter = ({ filter, onChange }) => {
 return  <Label>
    Find contacts by name
    <Input type="text" value={filter} onChange={onChange}/>
  </Label>
}


export default Filter;