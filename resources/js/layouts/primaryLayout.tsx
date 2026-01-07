import React from 'react'



export default function primaryLayout({NavBar, Page}) {
    return 
    (
        <div>
            <nav>
                {NavBar}
            </nav>
            <main>
                {Page}
            </main>
        </div>
    )
}
