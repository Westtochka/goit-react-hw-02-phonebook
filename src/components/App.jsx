import { Component } from 'react'
import { ContactTitle } from "../components/ContactTitle/ContactTitle";
import {FormignUp} from "../components/FormSignUp/FormSignUp";
import { nanoid } from 'nanoid'

class App extends Component { 
  state = {
    contacts: [],
    filter: ''
  }
  createUser=(data)=>{
    const newUser={
      id: nanoid(),
      isDev: true,
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
      <FormignUp createUser={this.createUser}/>
    </div>
    )

}

}
export default App

