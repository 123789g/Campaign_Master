import React from 'react'
import fire from '../config/fire'

class Enemy extends React.Component {
  render() {
    const db = fire.firestore()
    const docCreature = db
      .collection('Creatures')
      .doc('Beast')
      .get()
      .then(querySnapshot => querySnapshot.data())
      .then(console.log('Got the Documents'))
      .then(console.log)

    return (
      <div className="enemyContainer">
        <h1>Enemy Box </h1>
      </div>
    )
  }
}
export default Enemy
