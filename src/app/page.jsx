import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div>
      <Link href="/login">login</Link><br />
      <Link href="/signup">signup</Link><br />
      <Link href="/contact">contact</Link><br />
      <Link href="/about">about</Link><br />

      <h1 style={{color:'red', fontSize:'8rem'}}>My home page</h1>
      <input type="text" /><br />
      <button className='my-btn'>Submit</button>
    </div>
  )
}


export default Home;
