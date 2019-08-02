import React from "react"

import "./App.css"
import Header from "./components/Header"
import Dice from "./components/Dice"
import CustomDice from "./components/CustomDice"
import Map from "./components/Map"
import Enemy from "./components/Enemy"
import Loot from "./components/Loot"
import Login from "./components/Login"
import SignUp from "./components/SignUp"

function App() {
  return (
    <div>
      <Login />
      <SignUp />
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
