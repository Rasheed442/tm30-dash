import React, { useState,useEffect } from 'react'
import Sidebar from '../component/Sidebar'
import style from "../styles/account.module.css"
import styles from "../styles/transaction.module.css"
import Image from 'next/image'
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "react-modal"
import {AiOutlineSearch,AiTwotoneBell,AiOutlineDown,AiOutlineArrowLeft,
  AiOutlineArrowRight,AiOutlinePlus,AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import {MdShowChart} from "react-icons/md"
import {TiArrowUnsorted} from "react-icons/ti"
import Transaction from '../component/Transaction'
import Modal1 from '../component/Modal1'
import Modal2 from '../component/Modal2'
import Modal3 from '../component/Modal3'
import Link from 'next/link'
function account() {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const username = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("userName"))  : null

  const [counter, setCounter] = useState(1)

  const [see, setSee] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>  
         { modal1 ?<Modal1 handle={setModal1}/>:""} 
             {modal2 ?<Modal2 cancelmodal2={setModal2}/>:""}
         { modal3 ?<Modal3 cancelmodal3={setModal3}/>:""}

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
          {/* <Image src="/dot.png" width={20} height={20} priority /> */}
          <div></div>
       </div>      

             <div className={style.line}></div>          
                  <Link href='setting'>< Image src="/profile.png" width={40} height={40} priority/></Link> 
                  
             <div className={style.name}>
                <p style={{textTransform:"capitalize"}}>{username} <AiOutlineDown size={12}/></p>
                <span>Agent Manager</span>
             </div>
          </div>  
      
    </div> 
  
    <div className={style.bg}>

     <div className={style.flexout}>

        <div className={style.accounts}>
           <div className={style.account}>
             <h5>Main Account</h5>
             <p>My Card Details<br/><span>532 *** *** 4567</span></p>
             <button onClick={()=> setModal1(true)}><AiOutlinePlus size={13} style={{color:"#1B59F8"}}/>&nbsp; Add New Card</button>
          </div>
          <div className={style.account1}>
             <h5>Available Balance</h5>
             {see ?<p onClick={()=>{setSee(false)}} type="password">#500,000,783 &nbsp;<AiFillEyeInvisible/></p>:""}
             {see ? "":<p onClick={()=>{
               setSee(true)
               setTimeout(() => {
                setSee(false)
               }, 4000);
             }} type="password">*** *** *** *** &nbsp;<AiFillEye/></p>}
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
             <Image src="/Group.png" width={70} height={70} priority/>
             <button onClick={()=> setModal3(true)}>Fund Agent&apos;s Wallet</button>
          </div>
        </div>

</div>        

     <div className={styles.container}>
     <div className={styles.background}>
        <div className={styles.transact}>
            <h3>Agents</h3>
            {/* <Link href='/'><p>View All Transactions</p></Link> */}
        </div> 

<div className={styles.gridout}>

        <div className={styles.profile}>
            <span>AGENT NAME<TiArrowUnsorted size={12}/></span>
            <p>James Adekola</p>
            <p>Shola Adeniyi</p>
            <p>Shola Adeniyi</p>
            <p>Tayo Temitope</p>
            <p>Tayo Temitope</p>
            <p>Shola Adeniyi</p>
            <p>Shola Adeniyi</p>
            <p>James Adekola</p>
            <p>James Adekola</p>
            <p>James Adekola</p>
            <p>Shola Adeniyi</p>   
        </div>
        <div className={styles.profile}>
            <span>AGENT ID</span>
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
            <p>N1123SB3</p> 
        </div>
        <div className={styles.profile}>
            <span>AGENT ACCOUNT NO. <TiArrowUnsorted size={12}/></span>
            <p>Transaction Approved</p>  
            <p>Transaction Approved</p>  
            <p>Transaction Approved</p>  
            <p>Transaction Approved</p>  
            <p>Insufficient Fund</p>  
            <p>Transaction Approved</p>  
            <p>Transaction Approved</p>  
            <p>Transaction Approved</p>  
            <p>Insufficient Fund</p>  
            <p>Insufficient Fund</p>  
            <p>Insufficient Fund</p>  
        </div>
        <div className={styles.profile}>
            <span>BUSINESS NAME <TiArrowUnsorted size={12}/></span>
            <p>TM30 GLOBAL INTERNATIONAL</p> 
            <p>TM30 GLOBAL INTERNATIONAL</p> 
            <p>TM30 GLOBAL INTERNATIONAL</p> 
            <p>TM30 GLOBAL INTERNATIONAL</p> 
            <p>TM30 GLOBAL INTERNATIONAL</p> 
            <p>TM30 GLOBAL INTERNATIONAL</p> 
            <p>TM30 GLOBAL INTERNATIONAL</p> 
            <p>TM30 GLOBAL INTERNATIONAL</p> 
            <p>TM30 GLOBAL INTERNATIONAL</p> 
            <p>TM30 GLOBAL INTERNATIONAL</p> 
            <p>TM30 GLOBAL INTERNATIONAL</p> 
        </div>
        <div className={styles.profile}>
            <span>EMAIL ADDRESS <TiArrowUnsorted size={12}/></span>
            <p>CUSTOMER@TM30.COM.NG</p>
            <p>CUSTOMER@TM30.COM.NG</p>
            <p>CUSTOMER@TM30.COM.NG</p>
            <p>CUSTOMER@TM30.COM.NG</p>
            <p>CUSTOMER@TM30.COM.NG</p>
            <p>CUSTOMER@TM30.COM.NG</p>
            <p>CUSTOMER@TM30.COM.NG</p>
            <p>CUSTOMER@TM30.COM.NG</p>
            <p>CUSTOMER@TM30.COM.NG</p>
            <p>CUSTOMER@TM30.COM.NG</p>
            <p>CUSTOMER@TM30.COM.NG</p>
        </div>
        <div className={styles.profile}>
            <span>STATE <TiArrowUnsorted size={12}/></span>
            <p>LAGOS STATE</p>
            <p>LAGOS STATE</p>
            <p>LAGOS STATE</p>
            <p>LAGOS STATE</p>
            <p>LAGOS STATE</p>
            <p>LAGOS STATE</p>
            <p>LAGOS STATE</p>
            <p>LAGOS STATE</p>
            <p>LAGOS STATE</p>
            <p>LAGOS STATE</p>
            <p>LAGOS STATE</p>
           
        </div>
        <div className={styles.profile}>
            <span>AMOUNT FUNDED <TiArrowUnsorted size={12}/></span>
            <p>&#8358;150,000</p>
            <p>&#8358;250,000</p>
            <p>&#8358;170,000</p>
            <p>&#8358;80,000</p>
            <p>&#8358;96,000</p>
            <p>&#8358;10,000</p>
            <p>&#8358;52,000</p>
            <p>&#8358;80,000</p>
            <p>&#8358;96,000</p>
            <p>&#8358;42,000</p>
            <p>&#8358;40,000</p> 
        </div>
        {/* <div className={styles.profile}>
            <span>DATE <TiArrowUnsorted size={12}/></span>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
           <p>14th April 2022</p>
        </div> */}
        <div className={styles.profile}>
            <span>STATUS <TiArrowUnsorted size={12}/></span>
             <p style={{backgroundColor:"#00F4001A",color:"#008000"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000"}}>Successful</p> 
             <p style={{backgroundColor:"#FF3A441A",color:"red",width:"100%", textAlign:"center"}}>FAILED</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000"}}>Successful</p> 
             <p style={{backgroundColor:"#FF3A441A",color:"red",width:"100%", textAlign:"center"}}>FAILED</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000"}}>Successful</p> 
        </div>
     

</div>

      <div className={styles.footer}>
        <span>Showing 1 to 5 of 100 entries</span>
        <div className={styles.btn}>
          <button style={{border:"1px solid red", color:"red"}} onClick={()=>{
            setCounter(counter-1)
            if(counter === 0){
               setCounter(0)
            }
          }}><AiOutlineArrowLeft/>&nbsp;Previous</button>
          <div className={style.btn1}>
            <button>{counter}</button>
            {/* <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>...</button>
            <button>10</button> */}
          </div>
          <button  style={{border:"1px solid #1B59F8", color:"#1B59F8"}} onClick={()=>{
            setCounter(counter+1)
          }}>Next&nbsp;<AiOutlineArrowRight/></button>
        </div>
      </div>

    </div>
  </div>  




      </div>
 

{/* end */}
    </div>    
  </div>
  
    </>

  )
}

export default account