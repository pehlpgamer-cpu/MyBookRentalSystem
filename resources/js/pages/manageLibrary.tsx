import { useState } from 'react'
import { Deferred, router, useForm } from '@inertiajs/react'
import PrimaryLayout from '@/layouts/primaryLayout'

// COMPONENTS
import BookCards from '@/components/bookCards'
import SideNavBar from '@/components/sideNavBar'
import AddEditBookModal from '@/components/addEditBookModal'

export default function ManageLibrary({ Books }) // this was the only thing missing on my inertia deferred LMAO
{
    function reloadBooks() {router.reload({ only: ['Books'] })}

    const [openAddEditModal, setOpenAddEditModal] = useState<boolean>(false);
    
    //const [data, setData, error] = useForm();

    function handleSearch(e: React.FormEvent)
    {
        e.preventDefault();
    }

    return (
    <PrimaryLayout 
    SideNavBar={<SideNavBar highlightBtn='manageLibrary'/>}
    
    Page={
        <div className='flex flex-col'>
            <AddEditBookModal modalOpened={openAddEditModal}/>
            <button onClick={reloadBooks} className='border p-2 hover:bg-black hover:text-white duration-150'>Reload</button>
            
            <header className='p-2'>
                <form onSubmit={handleSearch} className='grid grid-cols-5 gap-2'>
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

                    <div className='flex gap-2'>
                        <button type='button'
                            className='grow border rounded-md p-1.5   duration-100 hover:scale-105 hover:bg-black hover:text-white hover:rounded-3xl'>Search</button>
                        <button type='button'
                            className='grow border rounded-md p-1.5   duration-100 hover:scale-105 hover:bg-black hover:text-white hover:rounded-3xl'>Clear</button>
                        <button type='button' onClick={() => {setOpenAddEditModal(true)}}
                            className='grow border rounded-md p-1.5   duration-100 hover:scale-105 hover:bg-black hover:text-white hover:rounded-3xl'>Add</button>
                    </div>
                </form>
                    
            </header>

            <main className='h-full'>
                <Deferred data="Books" fallback={<div className='font-extrabold animate-pulse'>LOADING...</div>}>
                <section className='grid grid-cols-6 grid-rows-4 gap-3 border-t p-3 mt-3'>
                    {Books?.map((book: any) => (
                        <BookCards key={book.id} id={book.id} title={book.title} genre={book.genre}/> 
                    ))}
                </section>
                </Deferred>
            </main>
            <footer className='border-t'>
                <button>pagination</button>
            </footer>
        </div>
    } />
    )
}
