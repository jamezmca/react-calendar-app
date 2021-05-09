import './styles.css'
import React, { useState, useEffect } from 'react'


function App() {
  const [nav, setNav] = useState(0)
  const [days, setDays] = useState([])
  const [dateDisplay, setDateDisplay] = useState('')
  const [clicked, setClicked] = useState()
  const [events, setEvents] = useState(
    localStorage.getItem('events') ? 
    JSON.parse(localStorage.getItem('events')) : 
    [])

  function eventForDate(date) {
    events.find(e => e.date === date)
  }

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))
  }, [events])

  return (
    <div className="App">

    </div>
  );
}

export default App;
