import React, {useEffect, useState} from 'react'
import Navbar from './FCNavbar';
import chai from '../photos/chai.png'
import avshalom from '../photos/avshalom.png'

export default function Privacy() {
  return (
    <div>
      <Navbar/>
      <div class="d-flex justify-content-start">
        <div style={{textAlign: "start"}}>
          <h1 style={{color: "#E93F72", fontSize:"2.7em"}}>All Rights Reserved To:</h1><br/>
          <h2>Chai Keren: haikeren61@gmail.com</h2><br/>
          <h2>Avshalom Shriki: aavshlom1235@gmail.com</h2>
        </div>
      </div>
      <br/>
      <div class="d-flex justify-content-around">
      <div class="d-flex align-items-start">
          <img src={avshalom} alt="" style={{width:"500px", height:"350px"}}/>
          <img src={chai} alt="" style={{marginTop:"-210px"}}/>
      </div>
      </div>
    </div>
  )
}
