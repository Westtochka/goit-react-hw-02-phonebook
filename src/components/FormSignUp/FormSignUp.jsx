import { Component } from 'react'

export class FormignUp extends Component {
  state = {
    name: '',
    number: ''
  }

  handleChange=({target:{name,value}})=>{this.setState({[name]:value})}  
  // handleNumberChange=(e)=>{this.setState({number: e.target.value})}  
  
  handlerSubmit=(e)=>{
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

<button>Add contact</button>

  </form>)
}};