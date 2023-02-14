import React from 'react'
import style from "../styles/dispute.module.css"
import disputes from "../pages/dispute.json"
import {AiOutlineDown} from "react-icons/ai"
// import Caution from '../component/Caution'
function Table({handleOne,isClick}) {
  return (
    <div>
        <table className={style.table}>
                      <thead>
                            <tr>
                               <th>AGENT NAME</th>
                               <th>AGENT ID</th>
                               <th>PHONE NUMBER</th>
                               <th>AGENT BUSINESS NAME</th>
                               <th>AGENT EMAIL ADDRESS</th>
                               <th>TRANSACTION DISPUTES CONTENT</th>
                               <th>ACTION</th>
                               <th>RESOLVED STATUS</th>
                         </tr>   
                        </thead>
                      
                         {
                          disputes.map((d)=>{
                             return(
                                <tbody>
                                     <tr>
                                    <td>{d.name}</td>
                                    <td>{d.id}</td>
                                    <td>{d.number}</td>
                                    <td>{d.business_name}</td>
                                    <td>{d.agent_email}</td>
                                    <td>{d.transaction_dispute}</td>
                                    <td style={{color:"blue",cursor:"pointer"}} onClick={()=>{
                                        handleOne(d.id)
                                        isClick()
                                    }}>{d.action}</td>

                                    <td style={{width:"100%",margin:"5px",display:"inline-flex",borderRadius:"5px",
                                    justifyContent:"center",alignItems:"center",backgroundColor:`${d.Resolved_Status === "RESOLVED" ? 
                                    "#00F4001A" : (d.Resolved_Status === "OPENED") ? "#E0191933" : (d.Resolved_Status === "ESCALATED") 
                                    ?  "orange" : 'green' }`, color: `${d.Resolved_Status === "RESOLVED"?"GREEN":
                                     (d.Resolved_Status === "OPENED")?"RED":(d.Resolved_Status === "ESCALATED")?"white":""}`}}>{d.Resolved_Status}</td>

                                </tr>
                                </tbody>
                               
                             )
                          })
                         }
                    </table>
          
    </div>
  )
}

export default Table