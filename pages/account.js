import React, { useState } from 'react'
import Sidebar from '../component/Sidebar'
import style from "../styles/account.module.css"
import Image from 'next/image'
import Modal from "react-modal"
import {AiOutlineSearch,AiTwotoneBell,AiOutlineDown,AiOutlinePlus,AiFillEye} from "react-icons/ai"
import {MdShowChart} from "react-icons/md"
import Transaction from '../component/Transaction'
import Modal1 from '../component/Modal1'
import Modal2 from '../component/Modal2'
import Modal3 from '../component/Modal3'
function account() {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  return (
    <>  
         { modal1 ?<Modal1 handle={setModal1}/>:""} 
             {modal2 ?<Modal2 handle={setModal2}/>:""}
         { modal3 ?<Modal3 handle={setModal3}/>:""}

    <div className={style.header}>
      <Sidebar/>
  <div className={style.container}>
    <div className={style.main}>
        <h1>Account</h1>

        <div className={style.search}>
             <AiOutlineSearch size={20} style={{marginBottom:"-6px", color:"gray"}}/>
             <input type="text" placeholder='Search Terminals ID, Agent and Agent Managers'/>
        </div>

          <div className={style.profile}>
              <div className={style.reminder}>
                <AiTwotoneBell size={27} style={{backgroundColor:"gainsboro", color:"gray", borderRadius:"10px"}}/>
                 <Image src="/dot.png" width={20} height={20} priority />
              </div>        

             <div className={style.line}></div>          
                   <Image src="/profile.png" width={50} height={50} priority/>
             <div className={style.name}>
                <p>Segun Peters</p>
                <span>Super Agent</span>
             </div>
             <AiOutlineDown size={15}/>
          </div>  
      
    </div> 
  
    <div className={style.bg}>

     <div className={style.flexout}>

        <div className={style.accounts}>
           <div className={style.account}>
             <h5>Main Account</h5>
             <p>My Card Details<br/><span>532 *** *** 457</span></p>
             <button onClick={()=> setModal1(true)}><AiOutlinePlus size={20}/>&nbsp; Add New Card</button>
          </div>
          <div className={style.account1}>
             <h5>Available Balance</h5>
             <p>#500,000,783 &nbsp;<AiFillEye/></p>
             <button onClick={()=> setModal2(true)}>&nbsp; Fund Wallet</button>
          </div>
        </div>

        <div className={style.agents}>
          <div className={style.agent}>
            <h5>Total Onboarded Agent</h5>
           <h4>4,321</h4>
           <p><span><MdShowChart style={{color:"green"}}/> 5.5%</span> up from last week</p>
          </div> 

          <div className={style.agent1}>
             <Image src="/Group.png" width={50} height={50} priority/>
             <button onClick={()=> setModal3(true)}>Fund Agent&apos;s Wallet</button>
          </div>
        </div>

</div>        

     <Transaction/>

      </div>
 

{/* end */}
    </div>    
  </div>
  
    </>

  )
}

export default account