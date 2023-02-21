import React,{useState,useEffect} from 'react'
import style from "../styles/dispute.module.css"
import styles from "../styles/agent.module.css"
import {AiOutlineDown,AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import {BsToggleOn,BsToggleOff} from "react-icons/bs"
import {MdToggleOn,MdToggleOff} from "react-icons/md"
import Terminal from './Terminal'
import {TiArrowUnsorted} from "react-icons/ti"
import { icons } from 'react-icons/lib'
function Term2({check, data}) {
  console.log(data)
    const [counter, setCounter] = useState(0)
    const [isAgent, setisAgent] = useState()
    const [toggle , setToggle] = useState(true)
  return (
    <div>
          <table className={style.table}>
          <thead>
                <tr>
                   <th>AGENT NAME <TiArrowUnsorted size={12}/></th>
                   <th>AGENT ID <TiArrowUnsorted size={12}/></th>
                   <th>PHONE NUMBER <TiArrowUnsorted size={12}/></th>
                   <th>AGENT BUSINESS NAME <TiArrowUnsorted size={12}/></th>
                   <th>EMAIL ADDRESS <TiArrowUnsorted size={12}/></th>
                   <th>ADDRESS <TiArrowUnsorted size={12}/></th>
                   <th>STATUS <TiArrowUnsorted size={12}/></th>
             </tr>   
            </thead>
          
             {
              data.map((d)=>{
                 return(
                    <tbody>
                         <tr>
                         <td>{d.fullname}</td>
                        <td>{d._id}</td>
                        <td>{d.phonenumber}</td>
                        <td>{d.business_name}</td>
                        <td>{d.email}</td>
                        <td>{d.address}</td>
                        <td>{d.status == 'INACTIVE' ? (<MdToggleOff  size={25}/>) : <MdToggleOn style={{color:"green"}} size={25}/>}</td>
                    </tr>
                    </tbody>
                   
                 )
              })
             }
        </table>
    
        <div className={styles.footer}>
                 <span>Showing 1 to 5 of 100 entries</span>
             <div className={styles.btn}>
                 <button style={{border:"1px solid red", color:"red"}} onClick={()=>{
                  if(counter === 0){
                    setCounter(0)
                  }
                setCounter(counter-1)
              }}><AiOutlineArrowLeft/>&nbsp;Previous</button>
              <div className={style.btn1}>
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

export default Term2