import React from 'react'
import "./message.css"
import Sidebar from '../Sidebar/Sidebar'
import AdminHeader from '../AdminHeader/AdminHeader'

const Messages = () => {
  return (
    <>
      <AdminHeader />
      <div className='dashboard-container'>
        <div className="sidebar">
          <div className="overlay-content">
            <Sidebar />
          </div>
        </div>
        <div className="dashboard-right">
          Messages
        </div>
      </div>
    </>
  )
}

export default Messages