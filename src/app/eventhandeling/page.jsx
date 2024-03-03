'use client';
import React from 'react'

const EventHandling = () => {
  return (
    <div className='container'>
        <h1 className="text-center">Event Handling</h1>
        <hr />

        

        <input type="color" onChange={(e)=>{console.log(e.target.value);}} />

    </div>
  )
}

export default EventHandling