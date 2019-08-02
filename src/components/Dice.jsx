import React from "react"

class Dice extends React.Component {
  render() {
    // Show the Buttons and the Containers that 'hold' them in place.
    return (
      <div className="DiceBox">
        <div className="D4Container">
          <div>
            <button className="RollD4Button" onClick={this.rollD4}>
              D4
            </button>
            <p className="D4Value"> Result:{this.state.d4rollValue}</p>
          </div>
        </div>
        <div className="D6Container">
          <div>
            <button className="RollD6Button" onClick={this.rollD6}>
              D6
            </button>
            <p className="D6Value"> Result:{this.state.d6rollValue}</p>
          </div>
        </div>
        <div className="D8Container">
          <div>
            <button className="RollD8Button" onClick={this.rollD8}>
              D8
            </button>
            <p className="D8Value"> Result:{this.state.d8rollValue}</p>
          </div>
        </div>
        <div className="D10Container">
          <div>
            <button className="RollD10Button" onClick={this.rollD10}>
              D10
            </button>
            <p className="D10Value">Result:{this.state.d10rollValue}</p>
          </div>
        </div>
        <div className="D12Container">
          <div>
            <button className="RollD12Button" onClick={this.rollD12}>
              D12
            </button>
            <p className="D12Value">Result:{this.state.d12rollValue}</p>
          </div>
        </div>
        <div className="D20Container">
          <div>
            <button className="RollD20Button" onClick={this.rollD20}>
              D20
            </button>
            <p className="D20Value">Result:{this.state.d20rollValue}</p>
          </div>
        </div>
      </div>
    )
  }

  // Creates the State Object. Kept empty initally.
  state = {
    d4rollValue: " ",
    d6rollValue: " ",
    d8rollValue: " ",
    d10rollValue: " ",
    d12rollValue: " ",
    d20rollValue: " "
  }

  // The Function sets the contents of it's state to a random number.
  rollD4 = () => {
    this.setState({
      d4rollValue: Math.floor(Math.random() * 4) + 1
    })
  }
  rollD6 = () => {
    this.setState({
      d6rollValue: Math.floor(Math.random() * 6) + 1
    })
  }
  rollD8 = () => {
    this.setState({
      d8rollValue: Math.floor(Math.random() * 8) + 1
    })
  }
  rollD10 = () => {
    this.setState({
      d10rollValue: Math.floor(Math.random() * 10) + 1
    })
  }
  rollD12 = () => {
    this.setState({
      d12rollValue: Math.floor(Math.random() * 12) + 1
    })
  }
  rollD20 = () => {
    this.setState({
      d20rollValue: Math.floor(Math.random() * 20) + 1
    })
  }
}

export default Dice
