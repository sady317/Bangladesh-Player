import React, { useState } from 'react'

export default function PlayerCard({player}) {
  return (
   <>

           <div className="card bg-base-100 w-[90%] mx-auto shadow-sm  border px-2 py-1">
  <figure>
    <img
      src={player.img}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{player.name}</h2>
    <p>{player.description}</p>
    <div className="card-actions justify-end">
     
      <button id='btn'  onClick={()=>{
        const display=document.getElementById("display")
        const li=document.createElement("li")
        li.classList.add("text-xl")
        li.innerText=player.name
 
        display.appendChild(li)

      }} className="btn btn-primary">Select</button>
      

    </div>
  </div>
</div>

   </>
  )
}
