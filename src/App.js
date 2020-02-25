import React from "react"
import "./App.css"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import Header from "./components/Header"
import Dice from "./components/Dice"
import CustomDice from "./components/CustomDice"
import Map from "./components/Map"
import NPC from "./components/NPC"
import Loot from "./components/Loot"
import Auth from "./components/Auth"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: "flex"
        }}
      >
        <div
          style={{
            flexDirection: "column"
          }}
        >
          <Header />
          <Dice />
          <CustomDice />
        </div>
        <div
          style={{
            flexDirection: "row"
          }}
        >
          {/* <NPC /> */}
          {/* <Loot /> */}
          <Map />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
