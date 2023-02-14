import React,{useState, useEffect} from 'react'
import style from "../styles/login.module.css"
import Image from 'next/image'
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import Link from 'next/link'
function login() {
    const [see, setSee] = useState(true)
    const [see1, setSee1] = useState(true)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const auth = {email, password}

      function submithandler(e){
        e.preventDefault();
        console.log(auth)
        const mymail = "rasheed@gmail.com"
        const mypassword = "123456"
        // window.location="/dashboard"
        if(email  === mymail && password === mypassword){
          window.location="/dashboard"
        }else{
          alert("wrong email or password")
        }
      }
  return (
    <div className={style.background}>
        <Image src='/eclipse.png' width={700} height={200} priority/>

        <div className={style.container}>
          <Image src="/frame.png" width={600} height={400} priority/>
           <div className={style.main}>
              <div>
                <h2>Login</h2><br/>
               <p>name of company.logo</p>
              </div>
               
               <div className={style.user}>
                  <label>Username or Email</label>
                  <input type="email"placeholder='Enter your username or Email' onChange={(e)=> setEmail(e.target.value)}/>
               </div>
           
               <div className={style.pass}>
                  <label> Password</label>
                  <div className={style.password}> 
                     <input type={see1 ? "password":"text"}placeholder='Enter your username or Email' onChange={(e)=> setPassword(e.target.value)}/>
                     <div onClick={()=>{setSee1(!see1)}} style={{cursor:"pointer"}}>
                       {see1 ?<AiFillEyeInvisible size={20} onClick={()=>{setSee(!see1)}}/>:
                     <AiFillEye size={20}/>}
                     </div>                  
                     </div>
               </div>
               
                <div className={style.content}>
                    <div className={style.remember}>
                      <input type="checkbox"/>
                      <label>Remember me?</label>
                    </div>
                  <Link href="/"><p>Forgot Password</p></Link>
                </div>
                 
                 <div className={style.btn} onClick={submithandler}>
                      <button>Login</button>
                 </div>

           </div>
        </div>

        {/* end */}
          <div className={style.secimg}>
              <Image src='/eclipse1.png' width={500} height={600} priority/>
          </div>
    </div>
  )
}

export default login