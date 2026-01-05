//  git add .  && git commit -m "" && git push

import {useEffect, use, useRef, useState, useActionState} from 'react'
import axios from 'axios';
import {Head, Link, useForm} from '@inertiajs/react';

export default function login() {

  interface passVis{
    inputType: string;
    btnIcon: string;
  }
  //toggle pass vis
  const [passwordVisibility, setPasswordVisibility] = useState<passVis>({inputType: 'password',btnIcon: 'openedEye'});
  function togglePasswordVisibility ()
  {
    if (passwordVisibility.inputType == 'text') setPasswordVisibility({inputType: 'password',btnIcon: 'view'});
    else setPasswordVisibility({inputType: 'text',btnIcon: 'hide'});
  }

  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
})

function handleSubmit (e: React.FormEvent) {
    e.preventDefault();
    post('/login', {
        preserveScroll: false,
        preserveState: false,
    });
}

  


  return (
    <>
        <section className='w-screen h-[80vh] flex flex-col items-center justify-center gap-1'>
            <h1 className='text-4xl'>Login</h1>
            <form onSubmit={handleSubmit} className='border p-4 rounded-2xl flex flex-col max-w-4xl'>
              
              <input type="hidden" name="_method" value="POST"/> 
              <input type="hidden" name="_token" value="{{ csrf_token() }}"/> {/* CSRF protection */}

              <label>Username/Email</label>
              <input onChange={(e) => setData('email', e.target.value)} name='usernameOrEmail' type='text' className='border p-1.5' />
              <label className='text-red-600'>{errors?.email}</label>
              
              <label>Password</label>
              <span className='flex'>
                <input onChange={(e) => setData('password', e.target.value)} name='password' type={passwordVisibility.inputType} className='grow border p-1.5' />
                <button type='button' className='border border-l-0 p-1.5 h-full hover:bg-gray-100' onClick={togglePasswordVisibility}>view</button>
              </span>

              <label className='text-red-600'>{/**/}</label>
              
              <button disabled={processing} type='submit' className='text-xl font-bold rounded-4xl hover:scale-105 hover:rounded-lg duration-150 ease-in-out border mt-6 p-4'>Login</button>
              
              <button className='self-center underline mt-2'><a href='/register'>create an account?</a></button>
            </form>

            {/* temporary */}
            
        </section>
    </>
  )
}
