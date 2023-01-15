import React from 'react'
import Link from "next/link"
import {AiOutlineRight,AiOutlineDown,AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import style from "../styles/transaction.module.css"
function Transaction() {
  return (
  <div className={style.container}>
     <div className={style.background}>
        <div className={style.transact}>
            <h3>Recent Transactions</h3>
            <Link href='/'><p>View All Transactions</p></Link>
        </div> 

<div className={style.gridout}>

        <div className={style.profile}>
            <span>AGENT NAME &nbsp;<AiOutlineDown/></span>
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
        <div className={style.profile}>
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
        <div className={style.profile}>
            <span>RES MESSAGE<AiOutlineDown/></span>
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
        <div className={style.profile}>
            <span>RESP CODE &nbsp;<AiOutlineDown/></span>
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
            <p>00</p> 
        </div>
        <div className={style.profile}>
            <span>TRANS.TYPE &nbsp;<AiOutlineDown/></span>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"red"}}>Deposit</p>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"red"}}>Deposit</p>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"green"}}>Withdrawal</p>
            <p style={{color:"green"}}>Withdrawal</p>
        </div>
        <div className={style.profile}>
            <span>AMOUNT&nbsp;<AiOutlineDown/></span>
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
        <div className={style.profile}>
            <span>EARNING &nbsp;<AiOutlineDown/></span>
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
        <div className={style.profile}>
            <span>DATE&nbsp;<AiOutlineDown/></span>
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
        </div>
        <div className={style.profile}>
            <span>STATUS &nbsp;<AiOutlineDown/></span>
             <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
             <p style={{backgroundColor:"#00F4001A",color:"#008000", padding:"4px, 8px, 4px, 8px",width:"60px"}}>Successful</p> 
        </div>
        <div className={style.profile}>
            <span>AGENT NAME &nbsp;<AiOutlineDown/></span>
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
            <p>James Adekola</p>   
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
   
  )
}

export default Transaction