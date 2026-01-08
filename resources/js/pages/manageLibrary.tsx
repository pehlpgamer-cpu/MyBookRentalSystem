import {useRef, useEffect, useState} from 'react'
import { useForm, Link, Deferred } from '@inertiajs/react'
import BookCards from '@/components/bookCards';

//type Books{}

import PrimaryLayout from '@/layouts/primaryLayout';
import { type } from 'os';

export default function manageLibrary() {
    const [isTableView, setIsTableView] = useState<boolean>(false);
    const [abooks, setBooks] = useState([
        {
            id: 1,
            title: 'atomic habits'
        },
        {
            id: 2,
            title: 'clean code'
        }
    ]);

  return (
    <PrimaryLayout Page={
        <>
            {/* search */}
            <header>
                <label>title</label>
            </header>
            {/* display */}
            <main className='grid grid-cols-6'>
                <Deferred data="Books" fallback={<div className='font-extrabold'>LOADING...</div>}>
                    <div>
                        {Books.map((Books) => <div>{Books.title}</div>)}
                    </div>
                </Deferred>
                {/* {books.map((books) => <BookCards id={books.id} title={books.title} />)} */}
            </main>
            {/* pagination */}
            <footer>

            </footer>
        </>
    }/>
  )
}
