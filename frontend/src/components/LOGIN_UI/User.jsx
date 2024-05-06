import { react, useState } from 'react';
import './User.css';
import Navbar from '../Navbar';
import axios from 'axios';

function User() {
  const [isLogin, setIsLogin] = useState(true);

  const switchToLogin = () => {
    setIsLogin(true);
  };

  const switchToSignup = () => {
    setIsLogin(false);
  };
  console.log(isLogin);

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [registerData, setRegisterData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if(isLogin) {
      setLoginData({
        ...loginData,
        [name]: value,
      });
      console.log(loginData);
    } else {
      setRegisterData({
        ...registerData,
        [name]: value,
      });
      console.log(registerData);
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(isLogin) {
      const res = await axios.get("http://localhost:5000/auth/login", loginData);
      res.then((res) => {
        alert(res);
      })
      .catch((err) => {
        alert("error", err);
      });
    } else {
      const res = await axios.post("http://localhost:5000/auth/register", registerData);
      console.log(res);
      res.then((res) => {
        alert(res);
      })
      .catch((err) => {
        alert("error", err);
      })
    }
  }

  const call = () => {
    if(isLogin) {
      console.log(loginData);
    } else {
      console.log(registerData);
    }
  };

  return (
  <>
      <div className='User-upper'>
      <Navbar/>
        <div className="wrapper">
          <div className="title-text">
            <div className={`title ${isLogin ? 'login' : 'signup'}`}>{isLogin ? 'Login Form' : 'Signup Form'}</div>
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input type="radio" name="slide" id="login" checked={isLogin} onChange={switchToLogin} />
              <input type="radio" name="slide" id="signup" checked={!isLogin} onChange={switchToSignup} />
              <label htmlFor="login" className="slide login">Login</label>
              <label htmlFor="signup" className="slide signup">Signup</label>
              <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
              {isLogin ? (
                <form className="login">
                  <div className="field">
                    <input type="text" placeholder="Email Address" name="email" onChange={handleInputChange} required />
                  </div>
                  <div className="field">
                    <input type="password" placeholder="Password" name="password" onChange={handleInputChange} required />
                  </div>
                  <div className="pass-link"><a href="#">Forgot password?</a></div>
                  <div className="field btn">
                    <div className="btn-layer"></div>
                    <button type='button' onClick={handleSubmit}>Login</button>
                  </div>
                  <div className="signup-link">Not a member? <a href="#" onClick={switchToSignup}>Signup now</a></div>
                </form>
              ) : (
                <form className="signup">
                  <div className="field">
                    <input type="text" placeholder="User Name" name="userName" onChange={handleInputChange} required />
                  </div>
                  <div className="field">
                    <input type="email" placeholder="Email Address" name="email" onChange={handleInputChange} required />
                  </div>
                  <div className="field">
                    <input type="password" placeholder="Password" name="password" onChange={handleInputChange} required />
                  </div>
                  <div className="field">
                    <input type="password" placeholder="Confirm password" name="confirmPassword" onChange={handleInputChange} required />
                  </div>
                  <div className="field btn">
                    <div className="btn-layer"></div>
                    <button type='button' onClick={handleSubmit}>Signup</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
