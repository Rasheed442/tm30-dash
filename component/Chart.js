import React from 'react' 
import style from "../styles/chart.module.css"
import Image from 'next/image';
import Chartjs from 'chart.js/auto';
import {Bar, Pie, Line,Doughnut} from "react-chartjs-2"
import {AiOutlineArrowRight} from "react-icons/ai"
import Transaction from './Transaction';
function Chart() {  
    const data = {
        labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets:[{
            label:'Sales for 2020 (M)',
            data: [ 2.5,2,5,1,4,3,5,4,2,1,5,3],
       
            backgroundColor: [
                // "orange"
                "#FD8A8A",
                "#7286D3",
                "lightblue"        
            ]
        }]
    }
    console.log(data.labels)
    const pie = {
        labels:["37%","20%","43%"],
        datasets:[{
            label:'Sales for 2020 (M)',
            data: [ 2,2,5],
        
            backgroundColor: [
                // "orange",
                // "green",
                // "blue"
                "#FD8A8A",
                "#7286D3",
                "lightblue"
            ]
        }]
    }
    const doughnut = {
        labels:["37%","20%","43%","36%"],
        datasets:[{
            label:'Sales for 2020 (M)',
            data: [ 2,2,5,4],
            backgroundColor: [
                // "orange",
                // "green",
                // "blue",
                // "gray"
                "#FD8A8A",
                "#7286D3",
                "lightblue",
                "gray"         
       ]
        }]
    }
    

  return (
    <>
      <div className={style.main}>
     <div className={style.chart}>
        <div className={style.statistic}>
            <p>Transactional Activities</p>
            <select>
                <option>JAN</option>
                <option>FEB</option>
                <option>MAR</option>
                <option>APR</option>
                <option>MAY</option>
                <option>JUN</option>
                <option>JUL</option>
                <option>AUG</option>
                <option>SEP</option>
                <option>OCT</option>
                <option>NOV</option>
                <option>DEC</option>
            </select>
        </div>
        <Bar data={data}/>
    </div>

<div className={style.gridout}>
        <div className={style.terminal}>
                <span>Terminals</span>
                <p>64%</p>
                <Image src='/Graph.png' width={120} height={40} priority/>
            </div>
        <div className={style.terminal}>
                <span>Agents</span>
                <p>86%</p>
                <Image src='/Graph.png' width={120} height={40} priority/>
            </div>
        <div className={style.terminal}>
                <span>Agent Managers</span>
                <p>+34%</p>
            </div>
        <div className={style.terminal}>
                <span>Active Terminals</span>
                <p>2,734<span>/1,324%</span></p>
            </div>
        <div className={style.terminal}>
                <span>Active Agents</span>
                <p>1,745<span>/4,253</span></p>
            </div>
        <div className={style.terminal}>
                <span>Acive Managers</span>
                <p>273<span>/1,123</span></p>
            </div>
        {/* <div className={style.terminal}>
                <span>Active Transactions</span>
                <p>501<span>/Min</span></p>
                <Image src='/Graph.png' width={120} height={20} priority/>
            </div> */}
             {/* <div className={style.terminal}>
                <span>Terminals</span>
                <p>90<span>/150</span></p>
                <Image src='/Graph.png' width={120} height={20} priority/>
            </div>
        <div className={style.terminal}>
                <span>Active Locations</span>
                <p>2m 34s</p>
                <Image src='/Graph.png' width={120} height={20} priority/>
            </div> */}
       
</div>
  </div>

<div className={style.divert}>

<div className={style.flexout}>

      <div className={style.statistic}>
    <p>Statistics</p>
    <select><option>Lastweek</option></select>
  </div>

<div className={style.chart1}>
        <Pie data={pie}/>
    
    <div className={style.navigate}>
         <div className={style.manager}>
           <div className={style.blue}></div>
           <p>AGENT MANAGERS</p>
        </div>

        <div className={style.manager}>
           <div className={style.orange}></div>
           <p>AGENT</p>
        </div>
        <div className={style.manager}>
           <div className={style.green}></div>
           <p>TERMINALS</p>
        </div>
    </div>
       

</div>
<p style={{textAlign:"end", color:"blue", cursor:"pointer"}}>View All</p>
</div>

<div className={style.flexout}>

      <div className={style.statistic}>
    <p>Agent Leaderboard</p>
    <select><option>Lastweek</option></select>
  </div>

<div className={style.chart1}>
        <Doughnut data={doughnut}/>
    
    <div className={style.navigate}>
         <div className={style.manager}>
           <div className={style.blue}></div>
           <p>Jaytech Ventures</p>
        </div>

        <div className={style.manager}>
           <div className={style.orange}></div>
           <p>ABC Limited</p>
        </div>
        <div className={style.manager}>
           <div className={style.green}></div>
           <p>TM30 Global</p>
        </div>
        <div className={style.manager}>
           <div className={style.gray}></div>
           <p>Glamtom International</p>
        </div>
    </div>
       

    </div>
    <p style={{textAlign:"end", color:"blue", cursor:"pointer"}}>View Full Report <AiOutlineArrowRight size={15}/></p>
    </div>

</div>
<Transaction/>

    </>
  
  
   
  )
}

export default Chart





// import ApexCharts from 'apexcharts'
// import ReactApexChart from 'react-apexcharts'
// import dynamic from "next/dynamic"
// const chart = dynamic(() => import("react-apexcharts"),{ssr:false});