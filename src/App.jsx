import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenitcate';

function App() {
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");
  //const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken}/>
      <Authenticate token={token} setToken={setToken}/>
    </>
  )
}

export default App
