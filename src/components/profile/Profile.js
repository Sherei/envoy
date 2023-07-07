import React from 'react'
import { FaMoon, FaAngleRight, FaUnlockAlt, FaHeart, FaStar,FaReact } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdContactSupport } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { PiNotepad } from "react-icons/pi";
import { TbClockHour12 } from "react-icons/tb";
import { BsHammer } from "react-icons/bs";
import "./profile.css";

const Profile = () => {

  let array = [
    { title: "Help Center", icon1: <FaUnlockAlt />, icon2: <FaAngleRight /> },
    { title: "App Language", icon1: <FaReact />, icon2: <FaAngleRight /> },
    { title: "Favourite Service", icon1: <FaHeart />, icon2: <FaAngleRight /> },
    { title: "Address", icon1: <HiLocationMarker />, icon2: <FaAngleRight /> },
    { title: "Supports and live chat", icon1: <MdContactSupport />, icon2: <FaAngleRight /> },
  ]
  let array2 = [
    { title: "Privacy Policy", icon1: <SiAdguard />, icon2: <FaAngleRight /> },
    { title: "Terms & Conditions", icon1: <PiNotepad />, icon2: <FaAngleRight /> },
    { title: "Legal Notices", icon1: <BsHammer />, icon2: <FaAngleRight /> },
    { title: "About", icon1: <TbClockHour12 />, icon2: <FaAngleRight /> },
    { title: "Rate Us", icon1: <FaStar />, icon2: <FaAngleRight /> },

  ]
  return <>
    <div className='container-fluid p-0 m-0' >
      <div className='row'>
        <div className='col-lg-12'>
          <div className='profile_main mt-5'>
            <div className='profile_img  mb-4'>
              <img src="download (1).jpg" alt="" />
              <p className='mt-1'>Soul Armstrong</p>
              <button className='btn login-btn px-5'>Edit Profile</button>
            </div>
            <div>
              <p className='py-2 px-4' style={{ backgroundColor: "rgb(54,54,54)" }}>General</p>
              <div className='d-flex px-1 gap-2 align-items-center'>
                <span style={{ color: "grey", fontSize: "15px" }}><FaMoon /></span>
                  <span className='d-flex align-items-center py-1 px-1' style={{ marginTop: "5px", fontSize: "15px" }}>Dark Mode</span>
                <div style={{ marginLeft: "auto" }}>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider"></span>
                  </label>
                </div>
              </div>
              {array.map((data) => {
                return <div className='d-flex gap-2 px-1 menu_hover1 align-items-center'>
                  <span style={{ color: "grey", fontSize: "15px" }}>{data.icon1}</span>
                  <span className='d-flex align-items-center py-1 px-1' style={{ marginTop: "5px", fontSize: "15px" }}>{data.title}</span>
                  <div style={{ marginLeft: "auto", fontSize: "15px" }}>
                    {data.icon2}
                  </div>
                </div>
              })

              }
            </div>
            <div>
              <p className='py-2 px-4 mt-3' style={{ backgroundColor: "rgb(54,54,54)" }}>About App</p>

              {array2.map((data) => {
                return <div className='d-flex gap-2 px-1 menu_hover1 align-items-center'>
                  <span style={{ color: "grey", fontSize: "15px" }}>{data.icon1}</span>
                  <span className='d-flex align-items-center py-1 px-1' style={{ marginTop: "5px", fontSize: "15px" }}>{data.title}</span>
                  <div style={{ marginLeft: "auto", fontSize: "15px" }}>
                    {data.icon2}
                  </div>
                </div>
              })

              }
            </div>
          </div>
          <button className='btn logout-btn' style={{ width: "100%" }}>Logout</button>

        </div>
      </div>
    </div>
  </>
}

export default Profile