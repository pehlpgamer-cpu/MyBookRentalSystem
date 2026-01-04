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


  const [data, loginAction, isPending] = useActionState(handleForm, undefined);


  async function handleForm(PreviousState: unknown, formData: FormData)
  {
    const MaxPasswordLength = 64 as number;
    const MinPasswordLength = 3 as number;

    let inputIsValid = true as boolean;
    let usernameOrEmail_error;
    let password_error;


    const usernameOrEmail = formData.get('usernameOrEmail') as string;
    const password = formData.get('password') as string;

    if (usernameOrEmail.trim() == '')
    {
      usernameOrEmail_error = 'field is required';
      inputIsValid = false;
    }

    if (password.trim() == '')
    {
      password_error = 'field is required';
      inputIsValid = false;
    }
    else if (password.trim().length < MinPasswordLength) //
    {
      password_error = `minimum length is ${MinPasswordLength} characters`;
      inputIsValid = false;
    }
    else if (password.trim().length > MaxPasswordLength)
    {
      password_error = `maximum length is ${MaxPasswordLength} characters`;
      inputIsValid = false;
    }


    return {
      fieldData: {
        usernameOrEmail: usernameOrEmail,
        password: password
      },
      error:
      {
        usernameOrEmail_error: usernameOrEmail_error,
        password_error: password_error
      },
      inputIsValid: inputIsValid
    }

  }


  return (
    <>
        <section className='w-screen h-[80vh] flex flex-col items-center justify-center gap-1'>
            <h1 className='text-4xl'>Login</h1>
            <form action={loginAction} className='border p-4 rounded-2xl flex flex-col max-w-4xl'>
              
              {/* <input type="hidden" name="_method" value="PUT"> */}
              <input type="hidden" name="_token" value="{{ csrf_token() }}"/> {/* CSRF protection */}

              <label>Username/Email</label>
              <input name='usernameOrEmail' type='text' className='border p-1.5' />
              <label className='text-red-600'>{data?.error?.usernameOrEmail_error}</label>
              <label>Password</label>
              <span className='flex'>
                <input name='password' type={passwordVisibility.inputType} className='grow border p-1.5' />
                <button type='button' defaultValue={data?.fieldData?.password} className='border border-l-0 p-1.5 h-full hover:bg-gray-100' onClick={togglePasswordVisibility}>view</button>
              </span>
              <label className='text-red-600'>{data?.error?.password_error}</label>
              <button type='submit' className='text-xl font-bold rounded-4xl hover:scale-105 hover:rounded-lg duration-150 ease-in-out border mt-6 p-4'>Login</button>
              <a className='self-center underline mt-2'>create an account?</a>
            </form>

            {/* temporary */}
            <label className='text-amber-500 text-3xl'>{data?.inputIsValid ? <p>true</p> : <p>false</p> }</label>
            <label>{data?.fieldData?.usernameOrEmail}</label>
            {isPending ? <label className='text-yellow-600 text-2xl'>⏳LOADING...</label> : null}
        </section>
    </>
  )
}
