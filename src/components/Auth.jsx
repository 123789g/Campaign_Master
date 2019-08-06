import React from "react"
import Popup from "reactjs-popup"

class Auth extends React.Component {
  render() {
    return (
      <div className="authContainer">
        <Popup
          trigger={<button className="authButton">Login / SignUp</button>}
          modal
        >
          {close => (
            <div className="popup">
              <a className="popup" onClick={close}>
                &times;
              </a>
              <div />
              <div className="authLogin">
                <input className="authEmail" placeholder=" Enter Your Email" />
                <input
                  className="authPassword"
                  placeholder="Enter Your Password"
                />
              </div>
              <button className="loginAction"> Login </button>
              <button className="regAction"> Create an Account </button>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}
export default Auth
