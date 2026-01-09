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


import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";




// COMPONENTS
import SideNavBarButton from './sideNavBarButton';


export default function () {

    const [dashboard_BtnHighlighted, setDashboard_BtnHighlighted] = useState<boolean>(false);
    const [manageLibrary_BtnHighlighted, setManageLibrary_BtnHighlighted] = useState<boolean>(false);
    const [account_BtnHighlighted, setAccount_BtnHighlighted] = useState<boolean>(false);
    
    

    function disableAllHighlightedBtn()
    {
        setDashboard_BtnHighlighted(false);
        setManageLibrary_BtnHighlighted(false);
        setAccount_BtnHighlighted(false);
    }

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
            highlighted={dashboard_BtnHighlighted}
            isCollapsed={false}
            link='/dashboard'
            onClick={() => {setDashboard_BtnHighlighted(true)}}
            />

            <SideNavBarButton btnName='Library'
            icon={<Library className='text-2xl'/>}
            isVisible={true}
            highlighted={manageLibrary_BtnHighlighted}
            isCollapsed={false}
            link='/manageLibrary'
            onClick={() => {setManageLibrary_BtnHighlighted(true)}}
            />

            <SideNavBarButton btnName='Account'
            icon={<CircleUserRound className='text-2xl'/>}
            isVisible={true}
            highlighted={account_BtnHighlighted}
            isCollapsed={false}
            link='/accountSettings'
            onClick={null}
            />

            <div className=''/>
            <Link className='border p-1.5 rounded-md hover:rounded-2xl duration-200 ease-in-out' 
            href="/logout" method="post" as="button">Logout</Link>
        </section>
    </div>
    )
}
