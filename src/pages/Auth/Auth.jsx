import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className='Auth'>
        <div className="a-left">
            <img src={Logo} alt=''/>
            <div className="Webname">
                <h1>Tweet kar</h1>
                <h6>Where people Connect Over Ideas</h6>
            </div>
        </div>
     {/* <SignUp/> */}
     <LogIn/>
    
    </div>
  )
}
function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }
function SignUp (){
    return(
        <div className="a-right">
            <form className="infoForm">
                <h3>Sign Up</h3>
                <div>
                    <input type='text' placeholder='First Name' className='infoInput' name='firstname'/>
                    <input type='text' placeholder='Last Name' className='infoInput' name='Lastname'/>
                    
                </div>
                <div>
                    <input type='text' placeholder='User name' className='infoInput' name='User name'/></div>

                    <div>
                    <input type='text' placeholder='Password' className='infoInput' name='Password'/>
                    <input type='text' placeholder='Confirm Password' className='infoInput' name='Confirm Password'/></div>
                    <div>
                        <span style={{font
                        :'12px'}}>Already Have an Account Login!</span>
                    </div>
                    <button className="button infoButton" type='submit'>Sign up</button>
            </form>
        </div>
    )

}

export default Auth
