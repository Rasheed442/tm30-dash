import React,{useState,useEffect} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import style from "../styles/concession.module.css"
import Aos from "aos";
import "aos/dist/aos.css";
function Concession({handle}) {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
  return (
    <div className={style.background} >
       <div className={style.container} data-aos='slide-down'>
             <div className={style.header}>
                   <h2>Grant Concession</h2>
                   <AiOutlineClose size={25} style={{cursor:"pointer"}} onClick={()=> handle(false)}/>
             </div>
             <div className={style.form}>
                <label>Enter new Amount (Concession)</label>
                <input type='text' placeholder='Enter Amount'/>
             </div>

             <div className={style.btn}>
                <button className={style.btn1} onClick={()=> handle(false)}>Cancel</button>
                <button className={style.btn2}>Proceed</button>
             </div>
       </div>
    </div>
  )
}

export default Concession