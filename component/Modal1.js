import React,{useState,useEffect} from 'react'
import Image from "next/image"
import style from "../styles/modal1.module.css"
import {AiOutlineDown} from "react-icons/ai"
import Aos from "aos";
import "aos/dist/aos.css";
function Modal1({handle}) {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
  return (
    <div className={style.modal} >
            <div className={style.modal_content} data-aos='slide-down'>
                   <div className={style.main}>
                       <div className={style.btn} onClick={()=>handle(false)}>
                                               <button>Close</button>
                       </div>

                          <div className={style.card}>
                               <label>Card number</label>
                               <div className={style.number}>
                                  <input type='text' placeholder='1234 1234 1234 1234'/>
                                  <Image src='/card.png' width={40} height={25} priority/>
                               </div>
                           </div>

                   <div className={style.flexout}>
                          <div className={style.expiry}>
                               <label>Expiration</label>
                               <input type='text' placeholder='MM / YY'/>
                           </div>
                          <div className={style.expiry}>
                               <label>CVC</label>
                               <input type='text' placeholder='MM / YY'/>
                           </div>
                    </div>

                    <div className={style.card}>
                               <label>Country</label>
                               <div className={style.number}>
                                  <input type='text' placeholder='Nigeria'/>
                                  <AiOutlineDown size={20}/>
                               </div>
                           </div>

                     <div className={style.end}>
                        <p>By Providing Your Card Information, you allow<br/>agency banking to charge your card for future<br/>
                        payments in accordance with their terms.
                        </p>
                        <button>Add Card</button>
                        </div>      

    </div>
 </div>
</div>
  )
}

export default Modal1