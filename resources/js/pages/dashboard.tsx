import React from 'react'
import { useForm, Link } from '@inertiajs/react'
import PrimaryLayout from '@/layouts/primaryLayout';
import SideNavBar from '@/components/sideNavBar';


export default function dashboard() {


  return (
    <PrimaryLayout 
    SideNavBar={<SideNavBar highlightBtn='dashboard'/>}

    Page={
      <>
        <div>dashboard</div>
        
      </>
    }>
      
    </PrimaryLayout>
  )
}
