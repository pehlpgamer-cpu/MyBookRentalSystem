import React from 'react'

interface bookCardProps{
    id: number;
    title: string;
}

export default function bookCards({id, title} : bookCardProps) {
  return (
    <div className='p-3 border rounded-lg flex flex-col justify-center'>
        <h1 className='font-bold text-lg'>{title}</h1>
        <label>test</label>
    </div>
  )
}
