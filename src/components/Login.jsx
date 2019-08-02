import React from "react"
import Popup from "reactjs-popup"
import firebase from "firebase"

class Login extends React.Component {
  render() {
    return (
      <div className="loginContainer">
        <Popup trigger={<button className="loginButton">Login</button>} modal>
          {close => (
            <div className="popup">
              <a className="popup" onClick={close}>
                &times;
              </a>
              <div />
              <div className="inputLogin">
                <input className="inputEmail" placeholder=" Enter Your Email" />
                <input
                  className="inputPassword"
                  placeholder="Enter Your Password"
                />
              </div>
              <button className="loginAction"> Login </button>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}
export default Login
