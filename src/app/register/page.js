'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import bcrypt from 'bcrypt'

const RegisterPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [createdState, setCreatedState] = useState(false)
  const [creatingUser, setCreatingUser] = useState(false)
  const [error, setError] = useState(false)


  async function handleFormSubmit(e) {
    e.preventDefault()
    setCreatingUser(true)
    const nonHashedPass = password;
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(nonHashedPass, salt)
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, hashPassword }),
      headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
      setCreatedState(true)
    }
    else {
      setError(true)
    }
    setCreatingUser(false)
  }

  return (
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl mb-4'>
        Register
      </h1>
      {createdState && (
        <div className='my-4 text-center'>
          User created,<br /> now you can{' '}
          <Link className='underline' href='/login'>Login{' >>'}</Link>
        </div>
      )}
      <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
        <input disabled={creatingUser} type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} required/>
        <input disabled={creatingUser} type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required/>
        <button type='submit' disabled={creatingUser} >Register</button>
        {error && (
          <div className='my-4 text-center'>
            An Error Occured. Please try again later
          </div>
        )}
        <div className='my-4 text-center text-gray-500'>or Login with Provider</div>
        <button type='button' onClick={()=>{signIn('google', {callbackUrl: '/'})}} disabled={creatingUser} className='flex gap-4 justify-center'>
          <Image src='/google.png' width={32} height={24} />
          Login with Google</button>
        <div className='my-4 text-center text-gray-500 border-t pt-4'>
          Already registered?{' '}
          <Link className='underline' href='/login'>Login here{' >>'}</Link>
        </div>
      </form>

    </section>
  )
}

export default RegisterPage