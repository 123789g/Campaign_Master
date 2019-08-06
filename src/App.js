import React from "react"
import "./App.css"
import Header from "./components/Header"
import Dice from "./components/Dice"
import CustomDice from "./components/CustomDice"
import Map from "./components/Map"
import Enemy from "./components/Enemy"
import Loot from "./components/Loot"
import Auth from "./components/Auth"

function App() {
  return (
    <div>
      <Auth />
      <Header />
      <Map />
      <Enemy />
      <Loot />
      <Dice />
      <CustomDice />
    </div>
  )
}

export default App
