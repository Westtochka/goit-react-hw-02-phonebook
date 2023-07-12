import { Component } from 'react'
import { ContactTitle } from "../components/ContactTitle/ContactTitle";
import {FormignUp} from "../components/FormSignUp/FormSignUp";
import {ContactList} from "../components/ContactList/ContactList";
import {AddNewContact} from '../components/AddNewContact/AddNewContact'
import { nanoid } from 'nanoid';

class App extends Component { 
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
      }))
  }

  createUser=(data)=>{
    const newUser={
      id: nanoid(),
            ...data
    }
    console.log(newUser)
    console.log(data)
  }

render() {
return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ContactTitle title={'Phonebook'}/>
      <FormignUp />
      <ContactList contacts={this.state.contacts} onDeleteContact={this.deleteContact}/>
      <AddNewContact createUser={this.createUser} onDeleteContact={this.deleteContact}/>
    </div>
    )

}

}
export default App

