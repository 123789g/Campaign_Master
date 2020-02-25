import React from "react"
import { Button, Card, Typography } from "@material-ui/core"

class Map extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex"
        }}
      >
        <Card
          elevation="5"
          style={{
            height: "800px",
            width: "800px",
            background: "#242424",
            borderRadius: "8px"
          }}
        ></Card>
      </div>
    )
  }
}

export default Map
