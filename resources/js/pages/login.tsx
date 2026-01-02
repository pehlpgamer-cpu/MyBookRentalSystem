import {useEffect, use, useRef, useState} from 'react'

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


  return (
    <>
        <section className='w-screen flex flex-col items-center'>
            <h1>Login</h1>
            <form onSubmit={(e) => {e.preventDefault()} } className='border p-1.5 flex flex-col max-w-[20vw]'>
              <label>Username/Email</label>
              <input type='' className='border p-1.5' />
              
              <label>Password</label>
              <input required type={passwordVisibility.inputType} className='border p-1.5' />
              <button onClick={togglePasswordVisibility}>view</button>
              
              <button type='submit' className='border p-1.5'>Login</button>
              <a>create an account?</a>
            </form>
        </section>
    </>
  )
}
