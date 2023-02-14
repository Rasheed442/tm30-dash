import React,{useState,useEffect} from 'react'
import style from "../styles/agent.module.css"
import {AiOutlineDown,AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import {BsToggleOn,BsToggleOff} from "react-icons/bs"
function Term({check}) {
  const [counter, setCounter] = useState(0)
  return (
    <div>
<div className={style.gridout}>
       <div className={style.status} onClick={()=>{check(true)}}>
        <main>ASSIGNED AGENT NAME <AiOutlineDown/></main>
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
        <main>ADDRESS <AiOutlineDown/></main>
           <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
           <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
           <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
           <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
           <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
           <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
           <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
           <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
           <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
           <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
           <p>27,ADEAGA STR, ABULE EGBA, LAGOS</p>
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
   </div>

   <div className={style.footer}>
                 <span>Showing 1 to 5 of 100 entries</span>
             <div className={style.btn}>
                 <button style={{border:"1px solid red", color:"red"}} onClick={()=>{
                  if(counter === 0){
                    setCounter(0)
                  }
                setCounter(counter-1)
              }}><AiOutlineArrowLeft/>&nbsp;Previous</button>
              <div className={style.btn1}>
                {/* <button style={{backgroundColor:"#1B59F8", color:"white"}}>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>...</button>
                <button>10</button> */}
                <button>{counter}</button>
              </div>
              <button  style={{border:"1px solid #1B59F8", color:"#1B59F8"}} onClick={()=>{
                setCounter(counter+1)
              }}>Next&nbsp;<AiOutlineArrowRight/></button>
            </div>
          </div> 

    </div>
  )
}

export default Term