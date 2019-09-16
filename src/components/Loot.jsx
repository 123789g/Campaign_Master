import React from 'react'
import fire from '../config/fire'
class Loot extends React.Component {
  render() {
    const db = fire.firestore()
    const docCreatures = db
      .collection('Creatures')
      .get()
      .then(querySnapshot => querySnapshot.data())
      .then(console.log)

    return <div className="lootContainter"></div>
  }
}
export default Loot
