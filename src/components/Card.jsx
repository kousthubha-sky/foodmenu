import React, { useState } from 'react'

const Card= (props)=>{

 
  return (
    
        <div className=' text-center justify-center bg-white text-black inline-block p-9 px-12 rounded m-2  '>
            <img className='h-32 w-32 rounded-full mb-3 ' src={props.photo} alt="" />
            <h2 className='text-2xl font-bold mb-2 '>{props.user}</h2>
            <h3 className='text-blue-400'>{props.profession}</h3>
            <h3>Age - {props.age}</h3>
            <button className='bg-emerald-600 text-white px-4 py-2 rounded mt-3'>Add Friend</button>

        </div>
    
  )
  
}

export default Card