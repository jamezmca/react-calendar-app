import './styles.css'
import React, { useState, useEffect } from 'react'
import CalendarHeader from './components/CalendarHeader'
import Day from './components/Day'
import Modal from './components/Modal'
import { useDate } from './hooks/useDate'

function App() {
  const [nav, setNav] = useState(0)
  const [clicked, setClicked] = useState()
  const [events, setEvents] = useState(
    localStorage.getItem('events') ?
      JSON.parse(localStorage.getItem('events')) :
      [])
  //add in deleteModalType state for rendering each modal

  function eventForDate(date) {
    return events.find(e => e.date === date)
  }

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events))
  }, [events])

  const {days, dateDisplay} = useDate(events, nav)


  return (
    <>
      <div id="container">
        <CalendarHeader
          dateDisplay={dateDisplay}
          onNext={() => setNav(nav + 1)}
          onBack={() => setNav(nav - 1)} />

        <div id="weekdays">
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>

        <div id="calendar">
          {days.map((d, index) => (
            <Day
              day={d}
              key={index}
              onClick={() => {
                if (d.value !== 'padding') {
                  setClicked(d.date)
                }
              }} />
          ))}
        </div>

      </div>
      {
          clicked && !eventForDate(clicked) &&
          <Modal
            onClose={() => setClicked(null)}
            onSave={title => {
              setEvents([...events, { title, date: clicked }])
              setClicked(null)
            }}
            eventText={eventForDate(clicked) ? eventForDate(clicked).title : null}
            onDelete={() => {
              setEvents(events.filter(e => e.date !== clicked))
              setClicked(null)
            }} />
        }
    </>
  );
}

export default App;
