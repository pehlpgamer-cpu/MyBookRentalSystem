import {useRef, useEffect, useState} from 'react'
import { Deferred, router, useForm } from '@inertiajs/react'
import PrimaryLayout from '@/layouts/primaryLayout'
import BookCards from '@/components/bookCards'


export default function ManageLibrary({ Books }) // this was the only thing missing on my inertia deferred LMAO
{
    function reloadBooks() {router.reload({ only: ['Books'] })}
    
    const [data] = useForm();

    function handleSearch(e: React.FormEvent)
    {
        e.preventDefault();
    }

    return (
    <PrimaryLayout Page={
        <>
            <button hidden onClick={reloadBooks} className='border p-2 hover:scale-105 duration-150'>Reload</button>
            <header>
                <form onSubmit={handleSearch} className='grid grid-cols-4 gap-2'>
                    <span className='flex flex-col'>
                        <label>Title</label>
                        <input type='text' onChange={null} className='border rounded-md p-1.5'/>
                    </span>
                    <span className='flex flex-col'>
                        <label>Id</label>
                        <input type='number' onChange={null} className='border rounded-md p-1.5'/>
                    </span>
                    <span className='flex flex-col'>
                        <label>Genre</label>
                        <input type='text' onChange={null} className='border rounded-md p-1.5'/>
                    </span>
                    <span className='flex flex-col'>
                        <label>Author</label>
                        <input type='text' onChange={null} className='border rounded-md p-1.5'/>
                    </span>
                </form>
                    
            </header>

            <main className=''>
                <Deferred data="Books" fallback={<div className='font-extrabold animate-pulse'>LOADING...</div>}>
                <section className='grid grid-cols-6 gap-3 border p-3 mt-3 rounded-lg '>
                    {Books?.map((book) => (
                        <BookCards key={book.id} id={book.id} title={book.title} genre={book.genre}/> 
                    ))}
                </section>
                </Deferred>
            </main>
            
            <footer>

            </footer>
        </>
    } />
    )
}
