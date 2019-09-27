import React from 'react'
import fire from '../config/fire'

class NPC extends React.Component {
  state = {
    test: undefined
  }
  render() {
    const db = fire.firestore()
    const fireHostileA = db.collection('Hostile').doc('Animal')
    const fireHostileB = db.collection('Hostile').doc('Beast')
    const fireHostileD = db.collection('Hostile').doc('Demon')
    const fireHostileG = db.collection('Hostile').doc('God')
    const fireHostileH = db.collection('Hostile').doc('Human')
    const fireHostileS = db.collection('Hostile').doc('Spirit')

    const fireNonHostileA = db.collection('NonHostile').doc('Animal')
    const fireNonHostileB = db.collection('NonHostile').doc('Beast')
    const fireNonHostileD = db.collection('NonHostile').doc('Demon')
    const fireNonHostileG = db.collection('NonHostile').doc('God')
    const fireNonHostileH = db.collection('NonHostile').doc('Human')
    const fireNonHostileS = db.collection('NonHostile').doc('Spirit')

    fireNonHostileH
      .get()
      .then(snapshot => snapshot.data())

      .then(console.log)

    return (
      <div className="enemyContainer">
        <h1>NPC Box</h1>
      </div>
    )
  }
}
export default NPC
