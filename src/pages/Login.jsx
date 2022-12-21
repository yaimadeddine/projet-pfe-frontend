import axios from "axios";
import React ,{useState} from "react";
import logoOmrane from '../assets/omrane.png';
import { useNavigate } from "react-router-dom";



export default function Login() {

  const [email,setEmail] = useState('');
  const [password,sertPassword] = useState('');

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/login',{
      email, password
    }).then(res => {
      if (res.data.status === 201) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_id', res.data.user.id);
        localStorage.setItem('user_role', res.data.user.role);
      
        navigate('/');
       
      }  else {
        console.log('lmachakil');
        
      }
    })
  }






  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <img
            src={logoOmrane}
            alt="alomrane"
          />
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg"><b>Se connecter</b></p>
            <form>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="emial"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => sertPassword(e.target.value)}
                  value={password}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Se souvenir de moi</label>
                  </div>
                </div> */}
                {/* /.col */}
                <div className="col-4 justify-content-center">
                  <button type="button" className="btn btn-dark btn-block" onClick={login}>
                    Sign In
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
          
       
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </div>
  );
}
