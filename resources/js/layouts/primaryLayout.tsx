import React from 'react'



export default function primaryLayout({SideNavBar, Page}) {
    return (
        <div className='w-screen flex'>
            <nav className='border h-screen'>
                {SideNavBar}
            </nav>
            <main className='border border-l-0 w-screen'>
                {Page}
            </main>
        </div>
    )
}
