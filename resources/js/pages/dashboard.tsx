import React from 'react'
import { useForm, Link } from '@inertiajs/react'
import PrimaryLayout from '@/layouts/primaryLayout';
import SideNavBar from '@/components/sideNavBar';


export default function dashboard() {


  return (
    <PrimaryLayout 
    SideNavBar={<SideNavBar highlightBtn='manageLibrary'/>}

    Page={
      <>
        <div>dashboard</div>
        
      </>
    }>
      
    </PrimaryLayout>
  )
}
