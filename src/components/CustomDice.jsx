import React from "react"
import { Button, Card, Input, IconButton, Typography } from "@material-ui/core"
import CasinoIcon from "@material-ui/icons/Casino"
class CustomDice extends React.Component {
  //   State Management
  state = {
    numSides: "",
    numDice: "",
    customRoll: [],
    averageState: ""
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
      <div
        style={{
          padding: " 2%"
        }}
      >
        <Card
          elevation="5"
          style={{
            display: "flex",
            height: "270px",
            width: "200px",
            background: "#242424",
            borderRadius: "8px",
            alignItems: "center",
            justifyContent: "space-evenly"
          }}
        >
          <div
            style={{
              textAlignLast: "center"
            }}
          >
            <form onSubmit={this.enterPrevention}>
              <label>
                Number of Sides
                <div
                  style={{
                    width: "50px",
                    margin: "auto",
                    paddingBottom: "8px"
                  }}
                >
                  <Input
                    value={this.state.numSides}
                    onChange={this.updateSides.bind(this)}
                  />
                </div>
              </label>
            </form>
            <form onSubmit={this.enterPrevention}>
              <label>
                Number of Throws
                <div
                  style={{
                    width: "50px",
                    margin: "auto",
                    paddingBottom: "8px"
                  }}
                >
                  <Input
                    value={this.state.numDice}
                    onChange={this.updateDice.bind(this)}
                  />
                </div>
              </label>
            </form>
            <div>
              <IconButton onClick={this.applyMath}>
                <CasinoIcon />
              </IconButton>
            </div>
            <div>
              <Typography>{this.state.customRoll.toString()}</Typography>
              <br />
              <Typography>Average - {this.averageRoll()}</Typography>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}
export default CustomDice
