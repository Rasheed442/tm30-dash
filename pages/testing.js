import {CgDanger} from 'react-icons/cg'
import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { HiUsers } from 'react-icons/hi'
import { AiOutlineStock } from 'react-icons/ai'
import { RiFolderSettingsFill } from 'react-icons/ri'

const data = 
[
  {
    "icon":<MdDashboard/>,
    "name":"Dashboard",
    "path":"/dashboard",
    "background":"ghostwhite",
    "color":"#1B59F8"
    
},
{
    "icon":<HiUsers/>,
    "name":"My Account",
    "path":"/account",
    "background":"ghostwhite",
    "color":"#1B59F8"

},
{
    "icon":<HiUsers/>,
    "name":"Agent Management",
    "path":"/agent",
    "background":"ghostwhite",
    "color":"#1B59F8"

},
{
    "icon":<AiOutlineStock/>,
    "name":"Reporting",
    "path":"/reporting",
    "background":"ghostwhite",
    "color":"#1B59F8"

},
{
    "icon":<RiFolderSettingsFill/>,
    "name":"Settings",
    "path":"/setting",
    "background":"ghostwhite",
    "color":"#1B59F8"

},
{
    "icon":<CgDanger/>,
    "name":"Disputes",
    "path":"/dispute",
    "background":"ghostwhite",
    "color":"#1B59F8"

}
    
]

function testing() {
  return (
    <>
      {data.map((d)=>{
     return (
       <div>
        {d.icon}
       </div>
     )
  })}
    </>
  )
}



  



export default testing