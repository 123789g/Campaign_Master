import React from "react"
import { Button, Card, Typography } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"

class Dice extends React.Component {
  render() {
    // Show the Buttons and the Containers that 'hold' them in place.
    return (
      <div
        style={{
          padding: " 2%"
        }}
      >
        <CssBaseline />
        <Card
          elevation="5"
          style={{
            height: "370px",
            width: "200px",
            background: "#242424",
            borderRadius: "8px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "10%"
            }}
          >
            <div
              style={{
                display: "flex"
              }}
            >
              <Button onClick={this.rollD4}>D4</Button>
              <div
                style={{
                  width: "10px",
                  height: "10px"
                }}
              />
              <Typography> Result:{this.state.d4rollValue}</Typography>
            </div>

            <br />
            <div
              style={{
                display: "flex"
              }}
            >
              <Button onClick={this.rollD6}>D6</Button>
              <div
                style={{
                  width: "10px",
                  height: "10px"
                }}
              />
              <Typography> Result:{this.state.d6rollValue}</Typography>
            </div>

            <br />

            <div
              style={{
                display: "flex"
              }}
            >
              <Button onClick={this.rollD8}>D8</Button>
              <div
                style={{
                  width: "10px",
                  height: "10px"
                }}
              />
              <Typography> Result:{this.state.d8rollValue}</Typography>
            </div>

            <br />

            <div
              style={{
                display: "flex"
              }}
            >
              <Button onClick={this.rollD10}>D10</Button>
              <div
                style={{
                  width: "10px",
                  height: "10px"
                }}
              />
              <Typography> Result:{this.state.d10rollValue}</Typography>
            </div>

            <br />

            <div
              style={{
                display: "flex"
              }}
            >
              <Button onClick={this.rollD12}>D12</Button>
              <div
                style={{
                  width: "10px",
                  height: "10px"
                }}
              />
              <Typography> Result:{this.state.d12rollValue}</Typography>
            </div>

            <br />

            <div
              style={{
                display: "flex"
              }}
            >
              <Button onClick={this.rollD20}>D20</Button>
              <div
                style={{
                  width: "10px",
                  height: "10px"
                }}
              />
              <Typography> Result:{this.state.d20rollValue}</Typography>
            </div>
          </div>
        </Card>
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
