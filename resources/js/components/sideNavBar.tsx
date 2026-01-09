import {useState} from 'react'
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
    highlightBtn: string;
}

export default function SideNavBar({ highlightBtn }: SideNavBarProps) {

    const [dashboard_isHighlighted, setDashboard_isHighlighted] = useState<boolean>(false);
    const [manageLibrary_isHighlighted, setManageLibrary_isHighlighted] = useState<boolean>(false);
    const [account_isHighlighted, setAccount_isHighlighted] = useState<boolean>(false);
    
    
    if (highlightBtn == 'dashboard') setDashboard_isHighlighted(true);
    else if (highlightBtn == 'manageLibrary') setManageLibrary_isHighlighted(true);
    else if (highlightBtn == 'account') setAccount_isHighlighted(true);
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
