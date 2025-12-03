import React, { use, useEffect, useState } from 'react'
import PlayerCard from '../components/PlayerCard'


export default function Home() {

  const [player,setPlayer]=useState([ ])

  const [selectPlayer,setSelectPlayer]=useState([])
  // console.log(selectPlayer)

function addPlayer(details){
  const newPlayer=[...selectPlayer,details]
  setSelectPlayer(newPlayer)

  
}


  useEffect(()=>{
    fetch("./player.json")
    .then((res)=>res.json())
    .then((data)=>setPlayer(data))
  },[])



  return (
    <>
    <h1  className='text-center bg-red-400 w-30 cursor-pointer mx-auto my-6 py-2 text-white rounded-sm'>Make your 11</h1>
    
    
    <section  className='grid grid-cols-10'>
    <div className='grid grid-cols-3 space-y-8 col-span-8'>
      {player.map((p)=>(
        <PlayerCard player={p} addPlayer={addPlayer}/>
 
      ))}
        
</div>

<div className='col-span-2'>
<h1 className='text-center bg-red-400  cursor-pointer  mb-6 py-2 text-white rounded-sm'>Selected Players</h1>
<div>
{selectPlayer.map((p)=>(
  <>
  <div className='flex items-center gap-2 space-y-4'>
    <img src={p.img} alt="" className='w-10 h-10' />
  <p>{p.name}</p>
  </div>
  </>
))}
</div>
</div>




</section>
    </>
  )
}
