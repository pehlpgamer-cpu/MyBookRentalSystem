import {useRef, useEffect, useState} from 'react'
import { Deferred, router } from '@inertiajs/react'
import PrimaryLayout from '@/layouts/primaryLayout'



export default function ManageLibrary({ Books }) // this was the only thing missing on my inertia deferred LMAO
{
    function reloadBooks()
    {
        router.reload({ only: ['Books'] })
    }

  return (
    <PrimaryLayout Page={
      <>
        <header>
          <label>title</label>
        </header>
        <main className='grid grid-cols-6'>
          <Deferred data="Books" fallback={<div className='font-extrabold animate-pulse'>LOADING...</div>}>
            <div>
              {Books?.map((book) => (
                <div key={book.id}>{book.title}</div>
              ))}
            </div>
          </Deferred>
          <button onClick={reloadBooks} className='border p-2 hover:scale-105 duration-150'>Reload</button>
        </main>
        <footer></footer>
      </>
    } />
  )
}
