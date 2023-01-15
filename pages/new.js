import React,{useState} from 'react'
import style from "../styles/new.module.css"
import {AiFillCaretDown} from "react-icons/ai"
import Axios from "axios"
import Sidebar from '../component/Sidebar'
function New() {
      const [fullname, setFullname] = useState()
      const [number, setNumber] = useState()
      const [businessname, setBusinessname] = useState()
      const [businessaddress, setBusinessaddress] = useState()
      const [localgovt, setLocalgovt] = useState()
      const [state, setState] = useState()
      const [bvn, setBvn] = useState()

      const details = {fullname,number,businessaddress,businessname,localgovt,state,bvn}
  
    async function submithandler(e){
        const response = await fetch ("https://x8ki-letl-twmt.n7.xano.io/api:O8cBFVK1/tm30",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify(details)
        })
        const server = await response.json();
        console.log(server)
     }
       
      
  return (
   <div className={style.header}>
  <Sidebar/>
   
     <div className={style.container}>
       <h3>Add New Agent</h3>
       <div className={style.background}>
              <div className={style.name}>
                <label>Agent&apos;s Full name <span>*</span></label>
                <input type='text' placeholder='Enter your Agent name' onChange={(e) => setFullname(e.target.value)}/>
              </div>
              <div className={style.name}>
                <label>Phone Number (<span>*</span>Must be attached to your BVN)</label>
                <input type='text' placeholder='Enter your Phone Number linked to your BVN' onChange={(e) => setNumber(e.target.value)}/>
              </div>
              <div className={style.name}>
                <label>Business Name <span>*</span></label>
                <input type='text' placeholder='Enter your Business name' onChange={(e) => setBusinessname(e.target.value)}/>
              </div>
              <div className={style.name}>
                <label>Business Address <span>*</span></label>
                <input type='text' placeholder='Enter your Business Address' onChange={(e) => setBusinessaddress(e.target.value)}/>
              </div>
              <div className={style.name}>
                <label>Local Government Area <span>*</span></label>
                <input type='text' placeholder='Enter your Local Government Area' onChange={(e) => setLocalgovt(e.target.value)}/>
              </div>
              <div className={style.name}>
                <label>State <span>*</span></label>
                <input type='text' placeholder='Enter your state' onChange={(e) => setState(e.target.value)}/>
              </div>
              <div className={style.name}>
                <label>Government Issued ID (BVN, NIN) <span>*</span></label>
                <input type='text' placeholder='Enter your Government Issued ID' onChange={(e) => setBvn(e.target.value)}/>
              </div>
              
              <div className={style.btn}>
                  <button onClick={submithandler}>Submit</button>
              </div>

          </div>

     </div>
     
</div>
         
  )
}

export default New