import React from 'react'

import SideNavBar from '../components/sideNavBar';

export default function primaryLayout({Page}) {
    return (
        <div className='w-screen flex'>
            <nav className='border p-1'>
                <SideNavBar/>
            </nav>
            <main className='border'>
                {Page}
            </main>
        </div>
    )
}
