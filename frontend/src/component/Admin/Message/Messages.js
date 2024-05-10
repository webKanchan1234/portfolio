import React from 'react'
import "./message.css"
import Sidebar from '../Sidebar/Sidebar'

const Messages = () => {
  return (
    <div className='dashboard-container'>
      <div className="sidebar">
      <div className="overlay-content">
        <Sidebar/>
      </div>
      </div>
      <div className="dashboard-right">
        Messages
      </div>
    </div>
  )
}

export default Messages