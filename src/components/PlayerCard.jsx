import React, { useState } from 'react'

export default function PlayerCard({player,addPlayer}){
  

  
  return (
   <>

           <div className="card bg-base-100 w-[90%] mx-auto shadow-sm  border px-2 py-1">

  <figure>

    <img  src={player.img}  alt="Shoes" />

  </figure>

  <div className="card-body">
    <h2 className="card-title">{player.name}</h2>
    <p>{player.description}</p>
    <div className="card-actions justify-end">
     
      <button onClick={()=>{addPlayer(player)}} className="btn btn-primary">Select</button>
      

    </div>
  </div>
</div>

   </>
  )
}
