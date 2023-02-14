import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Dash from "../pages/dash"
import style from "../styles/sidebar.module.css"
import {useRouter} from 'next/router'
function testing() {
     const [color, setColor] = useState(false)
     const router = useRouter()
      
     return (
       <div className={style.container}>
      {/* {typeof window !== 'undefined' && } */}
      
      {Dash.map((dash)=>{
        return(   
                   

             <Link href={dash.path} className={router.pathname === dash.path ? style.top : ''}>
              <div className={style.head}>
          <Image src={`/${dash.icon}`} width={15} height={15}/>
          <p>{dash.name}</p>   
           </div>
           </Link> 

          
     
         
        ) 
      })}
    </div>
  )
}

export default testing