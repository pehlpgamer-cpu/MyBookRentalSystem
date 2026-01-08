import React from 'react'

import SideNavBar from '../components/sideNavBar';

export default function primaryLayout({Page}) {
    return (
        <div className='w-screen flex'>
            <nav className='border h-screen'>
                <SideNavBar/>
            </nav>
            <main className='border border-l-0 w-screen'>
                {Page}
            </main>
        </div>
    )
}
