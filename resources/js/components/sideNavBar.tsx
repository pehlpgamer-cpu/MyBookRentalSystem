import {useState} from 'react'
import '../../css/sideNavBar.css'
import { Link } from '@inertiajs/react';
// ICONS
import { MdDashboard } from "react-icons/md";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";

export default function () {

    const [accountRole, setAccountRole] = useState<string>('all');

    return (
    <div className='flex flex-col gap-1'>
        <button className='flex items-center border-b p-2 hover:bg-gray-100 cursor-pointer'>
            <TbLayoutSidebarLeftCollapseFilled className='text-2xl cursor-pointer'/>
            <label className='cursor-pointer'>collapse</label>
        </button>
        <section className='flex flex-col gap-1 p-2'>
            <Link href='/dashboard' className='flex items-center border p-2 rounded-md gap-1 hover:rounded-2xl duration-200 ease-in-out'>
                <MdDashboard className='text-2xl'/>
                <label>Dashboard</label>
            </Link>
    
            <Link href='/manageLibrary' className='flex items-center border p-2 rounded-md gap-1 hover:rounded-2xl duration-200 ease-in-out'>
                <IoLibrary className='text-2xl'/>
                <label>(ADMIN) Library</label>
            </Link>

            <div className=''/>
            <Link className='border p-1.5 rounded-md hover:rounded-2xl duration-200 ease-in-out' href="/logout" method="post" as="button">Logout</Link>
        </section>
    </div>
    )
}
