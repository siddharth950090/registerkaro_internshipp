import React from 'react'

export default function Card({ color, sign, header, title}) {
  return (
    <div className={`rounded-lg bg-card text-card-foreground shadow-sm w-full max-w-sm p-4 ${color}`}>
        <img src={sign} alt="" />
        <h3 className='text-xl font-bold mt-2'>{header}</h3>
        <p className="text-xm  text-black">{title}</p>

    </div>
  )
}
