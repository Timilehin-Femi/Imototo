import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'


export default function Button() {
  return (
    <div>
      <Link to='/subscribe' >
        <button className='btn'>Subscribe</button>
      </Link>
    </div>
  )
}
