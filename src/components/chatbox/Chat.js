import React, { useState } from 'react'
import { FaSearch, FaAngleLeft, FaTelegramPlane } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { BsFillMicFill } from "react-icons/bs";

import "./chat.css"

const Chat = () => {

  let [search, setSearch] = useState("")
  let [message, setMessage] = useState("")

  let array = [
    { img: "download (1).jpg", title: "Soul Armstrong", time: "2:30PM", desc: "Hey there i am using EnvoyChat", msg: "3" },
    { img: "3.jpg", title: "Rockey", time: "3:30PM", desc: "Hey there i am using EnvoyChat" },
    { img: "Einstein.jpg", title: "Einstein", time: "4:00AM", desc: "Hey there i am using EnvoyChat", msg: "3" },
    { img: "download.jpg", title: "Keyrin", time: "4:00AM", desc: "Hey there i am using EnvoyChat" },
    { img: "download (1).jpg", title: "Soul Armstrong", time: "2:30PM", desc: "Hey there i am using EnvoyChat", msg: "3" },
    { img: "3.jpg", title: "Rockey", time: "3:30PM", desc: "Hey there i am using EnvoyChat" },
    { img: "Einstein.jpg", title: "Einstein", time: "4:00AM", desc: "Hey there i am using EnvoyChat", msg: "3" },
  ]

  let {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  let SearchInput = (e) => {
    setSearch(e.target.value)
  }

  let Startlistening = () => {
    SpeechRecognition.startListening()
  }

  let Message = (e) => {
    setMessage(e.target.value || transcript || (e.target.value && transcript))
    resetTranscript()
  }
  if (!browserSupportsSpeechRecognition) {
    return <h1>Your Browser doesn't Support Speech Recognition.</h1>;
  }

  return <div className='container-fluid p-0 mt-4 chat '>
    <div className='row pt-3 px-2 pt-0'>
      <div className='col-lg-4 col-sm-12 row1' style={{ height: "80vh", overflow: "auto" }}>
        <div className='search_bar2 mb-4'>
          <span><FaSearch /></span>
          <input type="search" placeholder='Search' className='chat_search '
            value={search}
            onChange={(SearchInput)}
          />
        </div>
        {array
          .filter((data) => {
            const lowerCaseTitle = data.title.toLowerCase();
            const lowerCaseSearch = search.toLowerCase();
            return lowerCaseTitle.includes(lowerCaseSearch);
          })
          .map((data) => {
            return (
              <div
                className='d-flex gap-3 align-items-center pt-3 px-1 profiles'
                style={{
                  borderBottom: '1px solid rgb(114, 113, 113)',
                }}
              >
                <img src={data.img} alt='' className='chat_img' />
                <div>
                  <div className='d-flex justify-content-between' style={{ lineHeight: '15px' }}>
                    <p style={{ fontSize: '15px' }}>{data.title}</p>
                    <p style={{ fontSize: '13px', color: 'rgb(177, 173, 173)' }}>{data.time}</p>
                  </div>
                  <div className='d-flex'>
                    <p style={{ fontSize: '13px', color: 'rgb(177, 173, 173)' }}>{data.desc.slice(0, 29)}...</p>
                    {data.msg && <div className='message_counter'>{data.msg}</div>}
                  </div>
                </div>
              </div>
            );
          })}

      </div>

      <div className='col-lg-8 col-sm-12 chat_box'>
        <div className='chat_head'>
          <div className='icon d-flex align-items-center'>
            <FaAngleLeft />
          </div>
          <div className='d-flex gap-3 align-items-center' style={{ alignItems: 'center', verticalAlign: "middle" }}>
            <img src="download (1).jpg" className="chat_img" style={{ width: "38px", height: "38px" }} alt="" />
            <div className='d-flex align-items-center'>
              <span> Soul Armstrong</span>
            </div>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <BsThreeDotsVertical />
          </div>
        </div>

        <div className='chat_start px-3'>
          <div className='chat_box2 mb-3' style={
            {
              border: "none",
              backgroundColor: "white",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }} >
            <img src="susan-g-komen-3-day-nsQj12P4uiI-unsplash.jpg" alt="" className='' style={{ width: "230px", height: "130px", borderRadius: "5px" }} />
            <div>
              <p className=' card_msg' style={{ color: "black" }} >Hello here is picture </p>
              <div className='d-flex justify-content-between'>
                <p className='card_msg' style={{ color: "grey", fontSize: "13px" }} >16:40</p>
                <p className='card_msg' style={{ color: "grey", fontSize: "13px" }} >See translation</p>
              </div>
            </div>
          </div>


          <div className='chat_box2 mb-3' style={
            {
              border: "none",
              backgroundColor: "white",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }} >
            <div className='reply-border px-1'>
              <p className='card_msg' style={{ color: "rgb(172,243,42)", lineHeight: "30px" }}>you</p>
              <p className='card_msg'>hello</p>
            </div>
            <div>
              <p className=' card_msg' style={{ color: "black" }} >Hello here is picture hello  </p>
              <div className='d-flex justify-content-between'>
                <p className='card_msg' style={{ color: "grey", fontSize: "13px" }} >16:40</p>
                <p className='card_msg' style={{ color: "grey", fontSize: "13px" }} >See translation</p>
              </div>
            </div>
          </div>

          <div className='chat_box2 mb-3' style={
            {
              marginLeft: "auto",
              border: "none",
              backgroundColor: "rgb(172,243,42)",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }} >
            <div>
              <p className=' card_msg' style={{ color: "white" }} >Hello here is picture Hello here is picture </p>
              <div className='d-flex justify-content-end'>
                <p className='card_msg' style={{ color: "grey", fontSize: "13px" }} >16:40</p>
              </div>
            </div>
          </div>
          
          <div className='chat_box2 mb-3' style={
            {
              border: "none",
              marginLeft: "auto",
              backgroundColor: "rgb(172,243,42)",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              borderBottomLeftRadius: "10px",
            }} >
            <img src="susan-g-komen-3-day-nsQj12P4uiI-unsplash.jpg" alt="" className='border' style={{ width: "230px", height: "130px", borderRadius: "5px" }} />
            <div>
              <p className=' card_msg' style={{ color: "white" }} >Hello here is picture </p>
              <div className='d-flex justify-content-end'>
                <p className='card_msg' style={{ color: "grey", fontSize: "13px" }} >16:40</p>
              </div>
            </div>

          </div>
        </div>


        <div className='px-3 pb-3' >
          <div className='chat_bottom'>
            <input type="text" placeholder='Write a message ....'
              value={message || transcript}
              style={{ width: "88%" }}
              onChange={(Message)} />
            <button className="mic_hover2" onClick={(Startlistening)}>
              <BsFillMicFill /></button>
            <div className='bottom_icon'>
              <FaTelegramPlane />
            </div>

          </div>
        </div>




      </div>
    </div>
  </div >
}

export default Chat