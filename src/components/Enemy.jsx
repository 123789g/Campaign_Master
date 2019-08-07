import React from "react"
import firebase from "firebase"
import { base } from "../config/fire"

class Enemy extends React.Component {
  render() {
    return (
      <div className="enemyContainer">
        <h1>{this.state.speed}</h1>
      </div>
    )
  }
  state = {
    speed: " "
  }
}
export default Enemy
