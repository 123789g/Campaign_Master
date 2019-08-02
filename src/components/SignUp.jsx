import React from "react"
import Popup from "reactjs-popup"
// import firebase from "firebase"

class SignUp extends React.Component {
  render() {
    return (
      <div className="signupContainer">
        <Popup
          trigger={<button className="signupButton">Sign Up</button>}
          modal
        >
          {close => (
            <div>
              <a onClick={close}>&times;</a>
              <div />
              <div className="regSignup">
                <input className="regEmail" placeholder=" Enter Your Email" />
                <input
                  className="regPassword"
                  placeholder="Create Your Password"
                />
              </div>
              <button className="signupAction"> Sign Up </button>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}
export default SignUp
