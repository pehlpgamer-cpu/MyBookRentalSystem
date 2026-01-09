import React from 'react'
import PrimaryLayout from '@/layouts/primaryLayout'
import SideNavBar from '@/components/sideNavBar'

export default function accountSettings() {
  return (

    <PrimaryLayout
    SideNavBar={<SideNavBar highlightBtn='account'/>}

    Page={<div>accountSettings</div>}
    />
  )
}
