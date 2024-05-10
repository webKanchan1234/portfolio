import React, { useEffect } from 'react'
import "./contact.css"
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import PublicIcon from '@mui/icons-material/Public';
import { useDispatch, useSelector } from 'react-redux';
import { allUsers, downloadResume } from '../../actions/userAction';

const Contact = () => {
  const dispatch = useDispatch()
  const {users,loading,error} = useSelector(state=>state.users)
  
  const user=users[0]
  // console.log(users)
  useEffect(() => {
    dispatch(allUsers())
  }, [])

  const download = async ()=>{
    dispatch(downloadResume())
  }

  return (
    <div id='contact1'>
      <h3 id='center'>Contact Me</h3>
      <p id='contact'>Below are the details to react out to me</p>
      <div className="contact-container">
        <div className="contact">
          <div className="cont-icon"><HomeIcon /></div>
          <p id='mrg'>ADDRESS</p>
          <p id='contact'>{user?.address}</p>
        </div>
        <div className="contact">
          <div className="cont-icon"><PhoneIcon /></div>
          <p id='mrg'>CONTACT NUMBER</p>
          <p id='contact'>+91 {user?.mobile}</p>
        </div>
        <div className="contact">
          <div className="cont-icon"><TelegramIcon /></div>
          <p id='mrg'>EMAIL ADDRESS</p>
          <p id='contact'>{user?.email}</p>
        </div>
        <div className="contact">
          <div className="cont-icon"><PublicIcon /></div>
          <p id='mrg'>DOWNLOAD RESUME</p>
          <p id='contact' className='resume' onClick={download}>Click Here</p>
        </div>
        
      </div>
    </div>
  )
}

export default Contact