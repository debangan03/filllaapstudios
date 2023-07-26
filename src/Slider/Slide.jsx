import React from 'react'
import Nsl from './Nsl';

import Nextsec from './Nextsec';
import Footer from '../Footer/Footer'

function Slide(props) {
  return (
    <>
    <div className="header">
    <Nsl/>
        {/* <Navbar className="fixed z-50"/> */}
    </div>
    <div className="sec">
        <Nextsec/>
    </div>
    <Footer ftext1={props.ftext1} ftext2={props.ftext2} ftext3={props.ftext3} btn1={props.btn1} l={props.l}/>
   
    </>
  )
}

export default Slide