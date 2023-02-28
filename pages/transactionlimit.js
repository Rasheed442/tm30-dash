import React,{useState} from 'react'
import Sidebar from '../component/Sidebar'
import style from "../styles/transactionlimit.module.css"
import {AiOutlineSearch,AiOutlineDown,AiTwotoneBell,AiOutlineMenu} from "react-icons/ai"
import  Image from 'next/image'
import Link from 'next/link'
import Updatetransactionlimit from '../component/Updatetransactionlimit'
function transactionlimit() {
     const [update, setUpdate] = useState(false)
  return (
    <div className={style.header}>
        {update ?<Updatetransactionlimit cancelUpdate={setUpdate}/>:""}
        <Sidebar/>
<div className={style.main}>
     <div className={style.container}>
            <h1>Settings</h1>
            {/* <div className={style.icon} onClick={()=>{setShow(true)}}>
            <AiOutlineMenu size={25}/>
            </div> */}
        <Link href='setting'>
            <div className={style.profile}>
                <div className={style.reminder}>
                    <AiTwotoneBell size={27} style={{backgroundColor:"gainsboro", color:"gray", borderRadius:"10px"}}/>
                    <div></div>
                </div>
                <div className={style.line}></div>          
                    <Image src="/profile.png" width={40} height={40} priority/>
                <div className={style.name}>
                    <p>rash <AiOutlineDown size={10}/></p>
                    <span>Agent Manager</span>
                </div>
            </div>
        </Link> 
            </div>

            <div className={style.whitesmoke}>
                <div className={style.white}>
                    <div className={style.commission}>
                        <p>Default Transaction Limit</p>                        
                    </div>
       
       <div className={style.gridout}>
                    <div className={style.limits}>
                        <div className={style.timer}>
                            <Image src="/timer.png" height={50} width={50} priority/>
                            <div>
                                <p>Manage Daily Limit</p>
                                <span>Increase or reduce your daily tranfer limit</span>
                            </div>
                        </div>
                      <div className={style.flexout} >
                        <div className={style.transaction}>
                            <span>Sending (Per Transaction)</span>
                            <span>Receiving (Per Transaction)</span>
                            <span>Daily Transaction Limit</span>
                        </div>
                        <div className={style.transaction}>
                            <p>&#8358;1,000,000.00</p>
                            <p>Unlimited</p>
                            <p>&#8358;1,000,000.00 per day</p>
                        </div>
                    </div> 
                    <button
                    onClick={()=>{
                        setUpdate(true)
                    }}>Update Transaction Limit</button>
                    </div>

                    <div className={style.limits}>
                        <div className={style.timer}>
                            <Image src="/timer.png" height={50} width={50} priority/>
                            <div>
                                <p>Manage Daily Limit</p>
                                <span>Increase or reduce your daily tranfer limit</span>
                            </div>
                        </div>
                      <div className={style.flexout} >
                        <div className={style.transaction}>
                            <span>Sending (Per Transaction)</span>
                            <span>Receiving (Per Transaction)</span>
                            <span>Daily Transaction Limit</span>
                        </div>
                        <div className={style.transaction}>
                            <p>&#8358;1,000,000.00</p>
                            <p>Unlimited</p>
                            <p>&#8358;1,000,000.00 per day</p>
                        </div>
                    </div> 
                    <button
                    onClick={()=>{
                        setUpdate(true)
                    }}>Update Transaction Limit</button>
                    </div>

                    <div className={style.limits}>
                        <div className={style.timer}>
                            <Image src="/timer.png" height={50} width={50} priority/>
                            <div>
                                <p>Manage Daily Limit</p>
                                <span>Increase or reduce your daily tranfer limit</span>
                            </div>
                        </div>
                      <div className={style.flexout} >
                        <div className={style.transaction}>
                            <span>Sending (Per Transaction)</span>
                            <span>Receiving (Per Transaction)</span>
                            <span>Daily Transaction Limit</span>
                        </div>
                        <div className={style.transaction}>
                            <p>&#8358; 1,000,000.00</p>
                            <p>Unlimited</p>
                            <p>&#8358; 1,000,000.00 per day</p>
                        </div>
                    </div> 
                    <button
                    onClick={()=>{
                        setUpdate(true)
                    }}>Update Transaction Limit</button>
                    </div>

                    <div className={style.limits}>
                        <div className={style.timer}>
                            <Image src="/timer.png" height={50} width={50} priority/>
                            <div>
                                <p>Manage Daily Limit</p>
                                <span>Increase or reduce your daily tranfer limit</span>
                            </div>
                        </div>
                      <div className={style.flexout} >
                        <div className={style.transaction}>
                            <span>Sending (Per Transaction)</span>
                            <span>Receiving (Per Transaction)</span>
                            <span>Daily Transaction Limit</span>
                        </div>
                        <div className={style.transaction}>
                            <p>&#8358; 1,000,000.00</p>
                            <p>Unlimited</p>
                            <p>&#8358; 1,000,000.00 per day</p>
                        </div>
                    </div> 
                    <button onClick={()=>{
                        setUpdate(true)
                    }}>Update Transaction Limit</button>
                    </div>
</div>



                </div>
            </div>
  </div> 
    </div>
  )
}

export default transactionlimit