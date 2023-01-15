import React from 'react'
import Sidebar from '../component/Sidebar'
import style from "../styles/terminal.module.css"
import {AiOutlineDown,AiTwotoneBell,AiOutlineSearch,AiOutlinePlus,AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai"
import {BsToggleOn} from "react-icons/bs"
import Image from 'next/image'
function agent() {
  return (
    <div className={style.background}>
        <Sidebar/>
     <div className={style.main}>   
        <div className={style.container}>
        <h2>Terminal Management</h2>

        {/* <div className={style.search}>
             <AiOutlineSearch size={20} style={{marginBottom:"-6px", color:"gray"}}/>
             <input type="text" placeholder='Search Terminals ID, Agent and Agent Managers'/>
        </div> */}

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
      <div className={style.contain}>
        <p>Agents</p>
        <div className={style.search}>
             <AiOutlineSearch size={20} style={{marginBottom:"-6px", color:"gray"}}/>
             <input type="text" placeholder='Search Terminals ID, Agent and Agent Managers'/>
        </div>
          <div className={style.agent}>
               <p><AiOutlinePlus/> Add New Agent Manager</p>
          </div>       
      </div>

    <div className={style.head}>
         <p>Agent Managers</p>
         <span>Agents</span>
    </div>
  
    
   <div className={style.gridout}>
       <div className={style.status}>
        <main>AGENT NAME <AiOutlineDown/></main>
        <p>James Adekola</p>
        <p>Shola Adeniyi</p>
        <p>Shola Adeniyi</p>
        <p>Tayo Temitope</p>
        <p>Tayo Temitope</p>
        <p>Shola Adeniyi</p>
        <p>Shola Adeniyi</p>
        <p>Shola Adeniyi</p>
        <p>James Adekola</p>
        <p>James Adekola</p>
        <p>James Adekola</p>
       </div>
       <div className={style.status}>
        <main>AGENT ID <AiOutlineDown/></main>
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
       <div className={style.status}>
        <main>PHONE NUMBER <AiOutlineDown/></main>
         <p>+23481 3226 5445</p>
         <p>+23481 3226 5445</p>
         <p>+23481 3226 5445</p>
         <p>+23481 3226 5445</p>
         <p>+23481 3226 5445</p>
         <p>+23481 3226 5445</p>
         <p>+23481 3226 5445</p>
         <p>+23481 3226 5445</p>
         <p>+23481 3226 5445</p>
         <p>+23481 3226 5445</p>
         <p>+23481 3226 5445</p>
       </div>
       <div className={style.status}>
        <main>BUSINESS NAME <AiOutlineDown/></main>
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
       <div className={style.status}>
        <main>EMAIL ADDRESS <AiOutlineDown/></main>
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
       <div className={style.status}>
        <main>STATE <AiOutlineDown/></main>
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
       <div className={style.statu}>
        <main>STATUS <AiOutlineDown/></main>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
       </div>
   </div>

   <div className={style.footer}>
        <span>Showing 1 to 5 of 100 entries</span>
        <div className={style.btn}>
          <button style={{border:"1px solid gainsboro", color:"#969494"}}><AiOutlineArrowLeft/>&nbsp;Previous</button>
          <div className={style.btn1}>
            <button style={{backgroundColor:"#1B59F8", color:"white"}}>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>...</button>
            <button>10</button>
          </div>
          <button  style={{border:"1px solid #1B59F8", color:"#1B59F8"}}>Next&nbsp;<AiOutlineArrowRight/></button>
        </div>
      </div>

  </div>
    </div>  
    </div>
  )
}

export default agent