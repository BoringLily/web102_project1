import { useState } from 'react'
import './App.css'
import Card from '../components/Card'

import cardList from './cardList.js';
const cardListJSON = JSON.parse(cardList);

function App() {
  let cards = [];
  cardListJSON.forEach(element => {
    cards.push(<Card image={element.image} title={element.title} description={element.description}/>)
  });
  return (
    <div className="App">
      <h2> Hackathons for aspring engineers</h2>
      <div id='card_container'>{cards} </div>
    </div>
  )
}

export default App
