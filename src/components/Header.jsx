import React from "react"
import Logo from "../img/Logo.png"

class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          paddingTop: "1%",
          paddingLeft: "2%"
        }}
      >
        <header className="Header">
          <a href="localhost:3000">
            <img src={Logo} className="appLogo" />
          </a>
        </header>
      </div>
    )
  }
}
export default Header
