import React, { useState } from 'react'

const Modal = ({ onSave, onClose }) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState(false)

    
    return (
        <>
            <div id="newEventModal">
                <h2>New Event</h2>
                <input value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    id="eventTitleInput" 
                    placeholder="Event Title" 
                    className={error ? 'error' : ''}/>
                <button onClick={() => {
                    if (title) {
                        setError(false)
                        onSave(title)
                    } else {
                        setError(true)
                    }
                }} id="saveButton">Save</button>
                <button onClick={onClose} id="cancelButton">Cancel</button>
            </div>
            <div id="modalBackDrop" />
        </>
    )
}

export default Modal
