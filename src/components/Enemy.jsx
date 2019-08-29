import React from 'react'
import firebase from 'firebase'
import { base } from '../config/fire'

class Enemy extends React.Component {
  render() {
    return <div className="enemyContainer">Enemy Box</div>
  }
  // Store Firebase Result in State
  state = {
    testValue: null
  }
}
export default Enemy
