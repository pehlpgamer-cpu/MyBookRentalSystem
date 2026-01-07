import {useState} from 'react'
import '../../css/sideNavBar.css'
import { Link } from '@inertiajs/react';
// ICONS
import { MdDashboard } from "react-icons/md";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";

export default function () {

    const [accountRole, setAccountRole] = useState<string>('all');

    return (
    <div className='flex flex-col gap-1'>
        <button>
            expand/collapse

        </button>
        <Link href='/welcome' className='flex justify-center items-center border p-1 rounded-md'>
            <MdDashboard className='text-2xl'/>
            <label>Dashboard</label>
        </Link>
    </div>
    )
}
