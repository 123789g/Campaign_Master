import React from 'react'
import './App.css'
import Header from './components/Header'
import Dice from './components/Dice'
import CustomDice from './components/CustomDice'
import Map from './components/Map'
import NPC from './components/NPC'
import Loot from './components/Loot'
import Auth from './components/Auth'

function App() {
  return (
    <div>
      <Header />
      <Map />
      <NPC />
      <Loot />
      <Dice />
      <CustomDice />
    </div>
  )
}

export default App
