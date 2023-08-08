

import './App.css';
import profile from './profile.webp';
import mail from './mail.png';
import lock from './lock.jpg';

function App() {
  return (
    <div className="main">
      <div className='sub-mail'>
        <div>
          <div className='imgs'>
            <div className='container-image'>
              <img src={profile} alt="profile" className='profile'/>
            </div> 
          </div>
            <div>
              <h1>Login Page</h1>
              <div>
                <img src={mail} alt="mail" className='mail'/>
                <input type="text" placeholder="User name" className="name"/>
              </div>
              <div className='second-input'>
                <img src={lock} alt="lock" className='mail'/>
                <input type="password" placeholder="Password" className="name"/>
              </div>
              <div className="login-button">
                <button>Login</button>
              </div>
                <p className="link">
                  <a href="#">Forget Password</a> Or <a href="#">Sign up</a>
                </p>
            </div>           
        </div>
      </div>
    </div>
  );
}

export default App;
