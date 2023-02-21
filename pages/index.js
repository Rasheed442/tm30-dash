import React,{useState, useEffect} from 'react'
import style from "../styles/login.module.css"
import Image from 'next/image'
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"
import ClipLoader from "react-spinners/ClipLoader";
import Link from 'next/link'
function login() {
    const [see, setSee] = useState(true)
    const [see1, setSee1] = useState(true)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading , setLoading] = useState(false)
    
    const [datamessage, setdataMessage] = useState()

    const auth = {email, password}

    // ${process.env.BASEURL}
 
      async function submithandler(e){
        e.preventDefault();
        setLoading(true)
        const response = await fetch('http://89.38.135.41:9800/auth/login',{
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(auth)
        })
        const server = await response.json();

        console.log(server)
        setdataMessage(server.message)
        console.log(server.message)
        localStorage.setItem('userName', JSON.stringify(server?.data?.name))
        localStorage.setItem('token', JSON.stringify(server?.token))
        localStorage.setItem('logo', JSON.stringify(server?.data?.logo))
        // if(server.status){
        //   window.location="/dashboard"  
        // }
        setLoading(false)
      }
      //   console.log(auth)
      //   const mymail = "rasheed@gmail.com"
      //   const mypassword = "123456"
      //   // window.location="/dashboard"
      //   if(email  === mymail && password === mypassword){
      //     window.location="/dashboard"
      //   }else{
      //     alert("wrong email or password")
      //   }
      // }
      
  return (
    <div className={style.background}>
        <Image src='/eclipse.png'alt='' width={700} height={200} priority/>

        <div className={style.container}>
          <Image src="/frame.png" alt='' width={600} height={400} priority/>
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
                      <button> {loading ?<ClipLoader loading={loading} size={20} />:"Login"}</button>
                      {/* {datamessage} */}
                 </div>

           </div>
        </div>

        {/* end */}
          <div className={style.secimg}>
              <Image src='/eclipse1.png'alt='eclip' width={500} height={600} priority/>
          </div>
    </div>
  )
}

export default login
// export async function getServerSideProps() {
//   const response = await fetch({
//       method: 'put',
//       url: process.env.BASEURL,
//       header: {  
//             Authorization: `${process.env.API_KEY} `
//       },
//       data: {
//           id: 12
//       }
//   });
// }