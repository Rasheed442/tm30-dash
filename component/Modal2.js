import React,{useState, useEffect} from 'react'
import style from "../styles/modal2.module.css"
import Image from "next/image"
import {AiOutlineClose,AiFillCaretDown} from "react-icons/ai"
import Aos from "aos";
import "aos/dist/aos.css";
function Modal2({handle}) {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState()

    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
  return (
    <div className={style.container} data-aos='slide-down'>
        <div className={style.header}>
            <h1>FUND WALLET</h1>
            <AiOutlineClose size={25} style={{cursor:"pointer"}} onClick={()=> {handle(false)}} />
        </div>

        <div className={style.payment} onClick={()=> setOpen(!open)}>
            <label>Payment Method</label>
          <div className={style.method}>
            <input type='text' value={text}  placeholder='select your payment method' />
            <AiFillCaretDown size={23}/>
           </div>
          {open ?<div className={style.btn}>
            <button  onClick={(e)=> setText(e.target.textContent)}>Bank Transfer</button>
            <button onClick={(e)=> setText(e.target.textContent)}>Card</button>
           </div>:""}
        </div>

  <div className={style.naration}>
        <div className={style.amount}>
            <label>Amount</label>
            <input type='text' placeholder='Enter Amount'/>
        </div>

        <div className={style.amount}>
            <label>Amount</label>
            <input type='text' placeholder='Enter Amount'/>
        </div>
</div>
 
   <div className={style.proceed}>
       <button>Proceed</button>
   </div>

    </div>
  )
}

export default Modal2