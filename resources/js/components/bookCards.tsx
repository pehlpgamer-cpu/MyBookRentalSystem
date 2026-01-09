import React from 'react'
import {Book, BookMarked} from 'lucide-react'
interface bookCardProps{
    id: number;
    title: string;
    genre: string;
    author: string;
}

export default function bookCards({id, title, genre, author} : bookCardProps) {
  return (
    <div className='border rounded-r-xl flex justify-center hover:scale-105 duration-150'>
      <img hidden className='w-55 border-r-1 bg-gray-100' alt='img.png'/>
      
      {/* TEMPORARY */}<BookMarked className='w-55 border-r h-full self-center bg-black text-white'/>
      
      <section className='flex flex-col p-3'>
        <h1 className='font-bold text-lg'>{title}</h1>
        <label>ID: {id}</label>
        <label>Genre: {genre}</label>
        {/* {<label><b>Author:</b> {author}</label>} */}
      </section>
    </div>
  )
}
