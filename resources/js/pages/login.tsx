//  git add .  && git commit -m "" && git push

import {useEffect, use, useRef, useState, useActionState} from 'react'

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


  const [data, action, isPending] = useActionState(handleForm, undefined);


  async function handleForm(PreviousState: unknown, formData: FormData)
  {
    const usernameOrEmail = formData.get('usernameOrEmail');
    const password = formData.get('password');

    return {
      usernameOrEmail: usernameOrEmail
    }
  }


  return (
    <>
        <section className='w-screen h-[80vh] flex flex-col items-center justify-center gap-1'>
            <h1 className='text-4xl'>Login</h1>
            <form action={action} className='border p-4 rounded-2xl flex flex-col max-w-4xl'>
              <label>Username/Email</label>
              <input name='usernameOrEmail' type='text' className='border p-1.5' />
              
              <label>Password</label>
              <span>
                <input name='password' type={passwordVisibility.inputType} className='border p-1.5' />
                <button className='border p-1.5 h-full' onClick={togglePasswordVisibility}>view</button>
              </span>
              <button type='submit' className='border mt-6 p-4'>Login</button>
              <a>create an account?</a>
            </form>
            <p>{data.usernameOrEmail}</p>
            {isPending ? <label className='text-yellow-600 text-2xl'>⏳LOADING...</label> : null}
        </section>
    </>
  )
}
