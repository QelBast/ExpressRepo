import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const handleChangeName = (event) => {
    setNameValue(event.target.value)
  }
  const handleChangeEmail = (event) => {
    setEmailValue(event.target.value)
  }

  const makeApiRequest = () => {
    console.log('makeApiRequest')
    axios("api/testwithcurrentuser").then(response => {
      console.log("response", response);
    })
  }

  const register = () => {
    const req = {
      name: nameValue,
      email: emailValue
    };
    console.log("registerJson", req);
    axios.post("auth/api/register", req).then(response => {
      console.log("response", response);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <code>Register</code>
        <p>
          <label>Type your name:</label>
          <input type="text" value={nameValue} onChange={handleChangeName}/>
        </p>
        <p>
          <label>Type your email:</label>
          <input type="text" value={emailValue} onChange={handleChangeEmail}/>
        </p>
        <p>
          <button onClick={register}>REGISTER NOW</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={makeApiRequest}>Make api request</button>
    </div>
  );
}

export default App;
