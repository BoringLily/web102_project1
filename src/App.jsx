import { useState } from 'react'
import './App.css'
import Card from '../components/Card'

import cardList from './cardList.js';
const cardListJSON = JSON.parse(cardList);

function App() {
  let cards = [];
  cardListJSON.forEach(element => {
    cards.push(<Card image={element.image} title={element.title} date={element.date} location={element.location} link={element.link}/>)
  });
  return (
    <div className="App">
      <div id='page_title'> Upcoming Hackathons Around the World</div>
      <div id='card_container'>{cards}</div>
    </div>
  )
}

export default App
