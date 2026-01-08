import React from 'react'

interface bookCardProps{
    id: number;
    title: string;
    genre: string;
    author: string;
}

export default function bookCards({id, title, genre, author} : bookCardProps) {
  return (
    <div className='p-3 border rounded-lg flex flex-col justify-center'>
        <h1 className='font-bold text-lg'>{title}</h1>
        <label><b>ID:</b> {id}</label>
        <label><b>Genre:</b> {genre}</label>
        {/* {<label><b>Author:</b> {author}</label>} */}
    </div>
  )
}
