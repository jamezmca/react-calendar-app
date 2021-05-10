import React from 'react'

const CalendarHeader = () => {
    return (
        <div id="header">
            <div id="monthDisplay"></div>
            <div>
                <button  id="backButton">Back</button>
                <button  id="nextButton">Next</button>
            </div>
        </div>
    )
}

export default CalendarHeader
