import React, { use, useEffect, useState } from 'react'
import PlayerCard from '../components/PlayerCard'


export default function Home() {

  const [player,setPlayer]=useState([ ])
  console.log(player)



  useEffect(()=>{
    fetch("./public/data/player.json")
    .then((res)=>res.json())
    .then((data)=>setPlayer(data))
  },[])



  return (
    <>
    <h1 className='text-center bg-red-400 w-30 cursor-pointer mx-auto my-6 py-2 text-white rounded-sm'>Make your 11</h1>
    
    <section  className='flex '>
    <div className='grid grid-cols-4 space-y-8 '>
      {player.map((p)=>(
        <PlayerCard player={p}/>
 
      ))}
        
</div>


<div className='w-[50%] bg-gray-400 rounded-md p-12 '>
<ul  id='display' className='list-decimal'>
{/* <li id='child'></li> */}
</ul>
</div>
</section>
    </>
  )
}
