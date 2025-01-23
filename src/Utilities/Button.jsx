import React from 'react'

export default function Button({ color, text }) {
  return (
    <button className=  {` ${color}px-5 py-3 rounded-md text-white text font-bold hover:opacity-70`} >{text}</button>
  )
}
