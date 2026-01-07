import React from 'react'
import { useForm, Link } from '@inertiajs/react'
import PrimaryLayout from '@/layouts/primaryLayout';


export default function dashboard() {


  return (
    <PrimaryLayout Page={
      <>
        <div>dashboard</div>
        <Link href="/logout" method="post" as="button">Logout</Link>
      </>
    }>
      
    </PrimaryLayout>
  )
}
