import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [folk, setFolk]=useState({"name": "", "email": "", "password": ""});
  const submitHandler=async (event)=>{
    event.preventDefault();
    const {name, email, password}=folk;
    if (name.length===0 || email.length===0 || password.length===0) {
      toast('please enter valid credentials');
      return;
    }
    const res=await axios.post('http://localhost:4000/', folk);
    toast(res.data.message);
    setFolk({"name": "", "email": "", "password": ""});
  }
  const inputHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setFolk({...folk, [name]: value});
  }
  return (
    <form onSubmit={submitHandler}>
       <h2>Register Here</h2>
       <div className='inputdiv'>
          <h4>Name</h4>
          <input type='text' name='name' value={folk.name} onChange={inputHandler}/>
       </div>
       <div className='inputdiv'>
          <h4>Email</h4>
          <input type='text' name='email' value={folk.email} onChange={inputHandler}/>
       </div>
       <div className='inputdiv'>
          <h4>Password</h4>
          <input type='text' name='password' value={folk.password} onChange={inputHandler}/>
       </div>
       <div className='btndiv'>
          <button type='submit'>Submit</button>
       </div>
       <ToastContainer />
    </form>
  );
}

export default App;
