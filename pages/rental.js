import React,{useState,useEffect} from 'react'
import Modal3 from '../component/Modal3'
import Sidebar from '../component/Sidebar'
import style from "../styles/rental.module.css"
import {AiOutlineSearch,AiTwotoneBell,AiOutlineDown,AiOutlinePlus,AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai"
import { BsToggleOn,BsToggleOff} from "react-icons/bs"
import Image from "next/image"
import Concession from '../component/Concession'
function testing() {
  const [open, setOpen] = useState(false)
  return (
    <div className={style.background}>
      {open ?<Concession handle={setOpen}/>:""}
      <Sidebar/>
      <div className={style.main}>
      <div className={style.container}>
        <h2>Rental Services</h2>

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
        {/* Header compoonent search */}
  <div className={style.bg}>   
      <div className={style.bg1}>
        <div className={style.contain}>
        <p>Rentals Charges</p>
        <div className={style.search1}>
             <AiOutlineSearch size={20} style={{marginBottom:"-6px", color:"gray"}}/>
             <input type="text" placeholder='Search Terminals ID, Agent and Agent Managers'/>
        </div>
          <div className={style.agent}>
               <p><AiOutlinePlus/> View POS Request</p>
          </div>       
      </div>
      
      <div className={style.gridout}>
       <div className={style.status}>
        <main>ASSIGNED NAME <AiOutlineDown/></main>
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
        <main>TERMINAL ID <AiOutlineDown/></main>
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
        <main>TERMINAL LOCATION <AiOutlineDown/></main>
         <p>IKEJA,LAGOS STATE</p>
         <p>OGBA,LAGOS STATE</p>
         <p>OGBA,LAGOS STATE</p>
         <p>IKEJA,LAGOS STATE</p>
         <p>BERGER,LAGOS STATE</p>
         <p>KETU,LAGOS STATE</p>
         <p>IKOTUN,LAGOS STATE</p>
         <p>IKOTUN,LAGOS STATE</p>
         <p>IEJA,LAGOS STATE</p>
         <p>IEJA,LAGOS STATE</p>
         <p>OGBA,LAGOS STATE</p>
       </div>
       <div className={style.status}>
        <main>CHARGES <AiOutlineDown/></main>
         <p>#10</p>
         <p>#10</p>
         <p>#15</p>
         <p>#15</p>
         <p>#15</p>
         <p>#10</p>
         <p>#10</p>
         <p>#10</p>
         <p>#10</p>
         <p>#10</p>
         <p>#10</p>
       </div>
       <div className={style.statu}>
        <main>STATUS <AiOutlineDown/></main>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
       </div>
       <div className={style.statu}>
        <main>STATUS <AiOutlineDown/></main>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
       </div>    
       <div className={style.status}>
        <main>GRANT CONCESSION <AiOutlineDown/></main>
         <p style={{color:"#1B59F8",backgroundColor:"#1B59F81C", cursor:"pointer"}} onClick={()=> setOpen(true)}>Click to set Concession</p>
         <p style={{color:"#1B59F8",backgroundColor:"#1B59F81C", cursor:"pointer"}} onClick={()=> setOpen(true)}>Click to set Concession</p>
         <p style={{color:"#1B59F8",backgroundColor:"#1B59F81C", cursor:"pointer"}} onClick={()=> setOpen(true)}>Click to set Concession</p>
         <p style={{color:"#1B59F8",backgroundColor:"#1B59F81C", cursor:"pointer"}} onClick={()=> setOpen(true)}>Click to set Concession</p>
         <p style={{color:"#1B59F8",backgroundColor:"#1B59F81C", cursor:"pointer"}} onClick={()=> setOpen(true)}>Click to set Concession</p>
         <p style={{color:"#1B59F8",backgroundColor:"#1B59F81C", cursor:"pointer"}} onClick={()=> setOpen(true)}>Click to set Concession</p>
         <p style={{color:"#1B59F8",backgroundColor:"#1B59F81C", cursor:"pointer"}} onClick={()=> setOpen(true)}>Click to set Concession</p>
         <p style={{color:"#1B59F8",backgroundColor:"#1B59F81C", cursor:"pointer"}} onClick={()=> setOpen(true)}>Click to set Concession</p>
         <p style={{color:"#1B59F8",backgroundColor:"#1B59F81C", cursor:"pointer"}} onClick={()=> setOpen(true)}>Click to set Concession</p>
         <p style={{color:"#1B59F8",backgroundColor:"#1B59F81C", cursor:"pointer"}} onClick={()=> setOpen(true)}>Click to set Concession</p>
         <p style={{color:"#1B59F8",backgroundColor:"#1B59F81C", cursor:"pointer"}} onClick={()=> setOpen(true)}>Click to set Concession</p>
       </div>
       <div className={style.statu}>
        <main>STATUS <AiOutlineDown/></main>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOn size={25} style={{color:"#2DCA72"}}/>
          <BsToggleOff size={25} style={{color:"#2DCA72"}}/>
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
    </div>
  )
}

export default testing