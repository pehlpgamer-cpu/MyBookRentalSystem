import React from 'react'

interface addEditBookModalProps {
    modalOpened: boolean;
    exitBtn: any;
}

export default function addEditBookModal({modalOpened, exitBtn} : addEditBookModalProps) {
    if (!modalOpened) return null;
    
    return (
        <div className='bg-black/50 w-screen h-screen flex justify-center items-center absolute'>
            <section className='bg-white border p-3 rounded-2xl'>
                <button onClick={exitBtn} className='p-2'>EXIT</button>
                <form className='flex flex-col justify-center gap-1.5'>
                    <label>Title</label>
                    <input type='text' className='border rounded-md p-1.5'/>
                    <label>Genre</label>
                    <input type='text' className='border rounded-md p-1.5'/>
                    <label>Author</label>
                    <input type='text' className='border rounded-md p-1.5'/>
                    <button type='submit' className='p-2 rounded-lg border'>Submit</button>
                </form>
            </section>
        </div>
    )
}
