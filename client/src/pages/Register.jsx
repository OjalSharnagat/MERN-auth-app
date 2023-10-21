import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const registerUser = async (e) => {
    e.preventDefault()
    const {name, email, password} = data
    try {
      const {data} = await axios.post('/register', {
        name, email, password
      })
      if(data.error) {
        toast.error(data.error)
      }  else {
          setData({})
          toast.success('Registered Successfully!')
          navigate('/login')
        }
      }
     catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="login-box">
      <div className="child-element left">
        <div className="overlay">
          <h1>Create an<br/>Account</h1>
          <br/>
          <small>Already have an account?</small>
          <br/>
          <small><Link to='/login'>Login here</Link></small>
        </div>
      </div>
      <div className="child-element right">

          <form className="inputs" onSubmit={registerUser}>
            <input type="text" placeholder="Username" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
            <br/>
            <input type="text" placeholder="Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
            <br/>
            <input type="text" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
            <br/>
            <button type='submit'>SignUp</button>
          </form>

      </div>
    </div>
  )
}
