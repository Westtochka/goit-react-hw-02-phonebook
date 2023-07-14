import { Component } from 'react'
import { ContactTitle } from "../components/ContactTitle/ContactTitle";
import {ContactForm} from "./ContactForm/ContactForm";
import {ContactList} from '../components/ContactList/ContactList';
// import {ContactItem} from '../components/ContactListItem/ContactItem';
// import {Filter} from './Filter/Filter'
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
      // this.setState({ contacts: [...contacts, newContact] })
  }

  createUser=(data)=>{
    const newUser={
      id: nanoid(),
            ...data
    }
    console.log(newUser)
    console.log(data)
    this.setState({ contacts: [...this.state.contacts, newUser] })
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
      <ContactForm createUser={this.createUser}/>
      <ContactList contacts={this.state.contacts} onDeleteContact={this.deleteContact}/>

      {/* <Filter createUser={this.createUser}
      onDeleteContact={this.deleteContact} */}
      {/* /> */}
    </div>
    )

}

}
export default App

