import React from 'react'
import { Link } from '@inertiajs/react';


interface sideNavBarBtnProps{
    btnName: string;
    link: string;
    isVisible: boolean;
    highlighted: boolean;
    isCollapsed: boolean;
    icon: any;
}

export default function sideNavBarButton({btnTitle, link, highlighted, isVisible, isCollapsed, icon} : sideNavBarBtnProps) {
  return (
    <Link href='/library' className='flex items-center border p-2 rounded-md gap-1 hover:rounded-2xl duration-200 ease-in-out'>
        <IoLibrary className='text-2xl'/>
        <label>(ADMIN) Library</label>
    </Link>
  )
}
