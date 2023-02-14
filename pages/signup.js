import React,{useState, useEffect} from 'react'
// import style from "../styles/login.module.css"
import Image from 'next/image'
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import Link from 'next/link'
function register() {
  const [see, setSee] = useState(true)
  const [see1, setSee1] = useState(true)
  return (
    <div className={style.background}>
        <Image src='/eclipse.png' width={600} height={150} priority/>

        <div className={style.container}>
          <Image src="/frame.png" width={600} height={400} priority/>
           <div className={style.main}>
              <div>
                <h2>Register</h2><br/>
               <p>name of company.logo</p>
              </div>
               
               <div className={style.user}>
                  <label>Username or Email</label>
                  <input type="email"placeholder='Enter your username or Email'/>
               </div>
               <div className={style.pass}>
                  <label>Password</label>
                  <div className={style.password}> 
                     <input type={see ? "password":"text"} placeholder='Enter your username or Email'/>
                     <div onClick={()=>{setSee(!see)}}>
                       {see ?<AiFillEyeInvisible size={20} onClick={()=>{setSee(!see)}}/>:
                     <AiFillEye size={20}/>}
                     </div>
                  </div>
               </div>
               <div className={style.pass}>
                  <label>Confirm Password</label>
                  <div className={style.password}> 
                     <input type={see1 ? "password":"text"}placeholder='Enter your username or Email'/>
                     <div onClick={()=>{setSee1(!see1)}}>
                       {see1 ?<AiFillEyeInvisible size={20} onClick={()=>{setSee(!see1)}}/>:
                     <AiFillEye size={20}/>}
                     </div>                  </div>
               </div>
               
                <div className={style.content}>
                    <div className={style.remember}>
                      <input type="checkbox"/>
                      <label>Remember me?</label>
                    </div>
                    <p>Forgot Password</p>
                </div>
                 
                 <div className={style.btn}>
                      <Link href='register'><button>Register</button></Link>
                      <span>Already have an account ?<Link href='login'><p>login</p></Link></span>
                 </div>

           </div>
        </div>

        {/* end */}
          <div className={style.secimg}>
              <Image src='/eclipse1.png' width={400} height={400} priority/>
          </div>
    </div>
  )
}

export default register