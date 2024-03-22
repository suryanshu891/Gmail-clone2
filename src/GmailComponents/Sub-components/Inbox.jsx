// import React from 'react';
import React, { useEffect, useState } from 'react'


function Inbox() {

  const [data, setData] = useState([])

useEffect(() => {   
  const url = window.location.href
  const token = url.match(/access_token=([^&]+)/)
  localStorage.setItem("Token",token && token[1])
  getEmailData()
}, [])
const getEmailData = () => {
  let token = localStorage.getItem("Token")
  console.log("hello", token)
  let url = "https://gmail.googleapis.com/gmail/v1/users/me/messages"
  const options = {
      method : 'GET',
      headers : {
          'Authorization' : `Bearer ${token}`,
          'Content-Type':'application/json'
      }
  }
  fetch(url,options)
  .then(response => response.json())
  .then(json=>fetchMail(json.messages))
  .catch(error=>console.log('Error in fetching mails',error))
}
const fetchMail = async (id) => {
console.log("message id is" ,id)
let token = localStorage.getItem("Token")
const options = {
  method : 'GET',
  headers : {
      'Authorization' : `Bearer ${token}`,
      'Content-Type':'application/json'
  }
}
let mailData = []
 for (let message_id of id.slice(0,10)) {
   let url =  `https://gmail.googleapis.com/gmail/v1/users/me/messages/${message_id.id}`
   const responce = await fetch(url,options)
 const  message_data = await responce.json();
   mailData.push(message_data)
   console.log("message_data", message_data)
 }

 console.log("email data is", mailData)
 setData(mailData)
 }

 return (
  <div>
    <div className="mail">
      {data && data.map((value, index) => (
       
        <div className="inbox-message-item">

          <div className="checkbox">
            <button className="btn">
              <img src="./icons/check_box_outline_blank_black_24dp.svg" alt="Select" className="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
            </button>
          </div>

          <div className="message-group-hidden">
            <button className="btn-alt btn-nofill drag-indicator">
              <img src="./icons/drag_indicator_black_24dp.svg" alt="Drag" className="btn-icon-sm btn-icon-alt btn-icon-disabled" />
            </button>
          </div>

          <button className="btn star">
            <img src="./icons/star_border_black_24dp.svg" alt="Not starred" className="btn-icon-sm btn-icon-alt btn-icon-hover message-btn-icon" />
          </button>

          <div className="message-default">

            <div className="message-sender message-content unread">
              <span>{value.payload.headers.find(item => item.name === "From").value}</span>
            </div>

            <div className="message-subject message-content unread">
              <span>{value.payload.headers.find(item => item.name === "Subject").value}</span>
            </div>

            <div className="message-separator message-content"> - </div>

            <div className="message-body message-content">
              <span>{value.snippet}</span>
            </div>

            <div className="gap message-content">&nbsp;</div>

            <div className="message-date center-text unread">
              <span>{value.payload.headers.find(item => item.name === "Date").value}</span>
            </div>

          </div>

          <div className="message-group-hidden">
            <div className="inbox-message-item-options">
              <button className="btn">
                <img src="./icons/archive_black_24dp.svg" alt="Archive" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
              </button>

              <button className="btn">
                <img src="./icons/delete_black_24dp.svg" alt="Delete" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
              </button>

              <button className="btn">
                <img src="./icons/mark_as_unread_black_24dp.svg" alt="Mark as unread" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
              </button>

              <button className="btn">
                <img src="./icons/access_time_filled_black_24dp.svg" alt="Snooze" className="btn-icon-sm btn-icon-alt btn-icon-hover" />
              </button>
            </div>
          </div>

        </div>
      ))}
    </div>
  </div>
);

}

export default Inbox;


