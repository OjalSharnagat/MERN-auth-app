import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  })



  const loginUser = async (e) => {
    e.preventDefault()
    const {email, password} = data
    try {
      const {data} = await axios.post('/login', {
        email,
        password
      });
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({});
        navigate('/dashboard')
      }
    } catch (error) {

  }
  }

  return (
    
    <div className="login-box">
      <div className="child-element left">
        <div className="overlay">
          <h1>Welcome<br/>Back!</h1>
          <small>New to NotesApp?</small>
          <br/>
          <small><Link to='/register'>SignUp here</Link></small>
        </div>
      </div>

      <div className="child-element right">
        
        <form className="inputs" onSubmit={loginUser}>
        <input type="email" placeholder="Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        <br/>
        <input type="password" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        <br/>
        <button type='submit'>Login</button>
        </form>

      </div>
      
    </div>
  );
}
