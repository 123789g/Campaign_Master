import React from 'react'

class CustomDice extends React.Component {
  //   State Management
  state = {
    numSides: '',
    numDice: '',
    customRoll: [],
    averageState: ''
  }

  // Methods to change the State based on the target value (user input)
  updateSides = event => {
    this.setState({ numSides: event.target.value.substr(0, 3) })
  }
  updateDice = event => {
    this.setState({ numDice: event.target.value.substr(0, 1) })
  }

  // Function to Apply math to State values
  applyMath = () => {
    let customRoll = []
    for (let i = 0; i < this.state.numDice; i++) {
      let result = Math.floor(Math.random() * this.state.numSides) + 1
      customRoll.push(result)
    }
    this.setState({ customRoll })
  }
  // Misc - Math (Getting Sum and Average)
  averageRoll = () => {
    let sum = 0
    let arrLength = this.state.customRoll.length
    for (let i in this.state.customRoll) {
      sum += this.state.customRoll[i]
    }
    let average = sum / arrLength
    return Math.round(average)
  }

  // Misc - Prevent Enter from breaking EVERYTHING
  enterPrevention = e => {
    e.preventDefault()
  }
  render() {
    return (
      <div className="customDiceBox">
        <form onSubmit={this.enterPrevention}>
          <label className="customDiceHeader">
            Number of Sides
            <div className="inputWrapper">
              <input
                value={this.state.numSides}
                onChange={this.updateSides.bind(this)}
              />
            </div>
          </label>
        </form>
        <form onSubmit={this.enterPrevention}>
          <label className="customDiceHeader">
            Number of Throws
            <div className="inputWrapper">
              <input
                value={this.state.numDice}
                onChange={this.updateDice.bind(this)}
              />
            </div>
          </label>
        </form>
        <div>
          <button className="customDiceButtonCSS" onClick={this.applyMath}>
            Roll
          </button>
        </div>
        <p className="customRollResult">{this.state.customRoll.toString()}</p>
        <p className="averaged">Average - {this.averageRoll()}</p>
      </div>
    )
  }
}
export default CustomDice
