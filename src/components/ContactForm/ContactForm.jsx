import { Component } from 'react'
// import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }

  handleChange=({target:{name,value}})=>
  {this.setState({[name]:value})}  
 
  handlerSubmit=e=>{
  e.preventDefault()
  this.props.createUser(this.state)
  this.reset();
  }
    
  reset=()=>{
  this.setState({
    name: '',
    number: ''
  })
}
render(){
    return (
<form onSubmit={this.handlerSubmit}>
    <label> Name 
  <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  value={this.state.name}
  onChange={this.handleChange}
/></label>
<label> Number 
<input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={this.handleChange}
  value={this.state.number}
/></label>

<button type="submit" disabled={!this.state.name||!this.state.number} >Add contact</button>

  </form>)
}};