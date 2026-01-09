import {useRef, useState} from 'react'
import '../../css/sideNavBar.css'
import { Link, router } from '@inertiajs/react';

// ICONS
import { 
    PanelLeftClose,
    PanelLeftOpen,
    LayoutDashboard, 
    Library,
    CircleUserRound
} from 'lucide-react';







// COMPONENTS
import SideNavBarButton from './sideNavBarButton';


interface SideNavBarProps {
    highlight_dashboard: boolean;
}

export default function SideNavBar({ highlightBtn }: SideNavBarProps) {

    const dashboard_isHighlighted = useRef<boolean>(false);
    const manageLibrary_isHighlighted = useRef<boolean>(false);
    const account_isHighlighted = useRef<boolean>(false);
    
    
    if (highlightBtn == 'dashboard') dashboard_isHighlighted.current = true;
    else if (highlightBtn == 'manageLibrary') manageLibrary_isHighlighted.current = true;
    else if (highlightBtn == 'account') account_isHighlighted.current = true;
    else alert('invalid nav button highlight');

    return (
    <div className='flex flex-col gap-1'>
        <button className='flex items-center border-b p-2 hover:bg-gray-100 cursor-pointer'>
            <PanelLeftClose className='text-2xl cursor-pointer'/>
            <label className='cursor-pointer'>collapse</label>
        </button>

        <section className='flex flex-col gap-1.5 p-2'>
            <SideNavBarButton btnName='Dashboard'
            icon={<LayoutDashboard className='text-2xl'/>}
            isVisible={true}
            highlighted={dashboard_isHighlighted}
            isCollapsed={false}
            link='/dashboard'
            
            />

            <SideNavBarButton btnName='Library'
            icon={<Library className='text-2xl'/>}
            isVisible={true}
            highlighted={manageLibrary_isHighlighted}
            isCollapsed={false}
            link='/manageLibrary'
            />

            <SideNavBarButton btnName='Account'
            icon={<CircleUserRound className='text-2xl'/>}
            isVisible={true}
            highlighted={account_isHighlighted}
            isCollapsed={false}
            link='/accountSettings'
            />

            <div className=''/>
            <Link className='border p-1.5 rounded-md hover:rounded-2xl duration-200 ease-in-out' 
            href="/logout" method="post" as="button">Logout</Link>
        </section>
    </div>
    )
}
