'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {signIn} from 'next-auth/react'

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const [loginInProgress, setLoginInProgress] = useState(false)

    async function handleFormSubmit(e){
        e.preventDefault();
        setLoginInProgress(true);
        await signIn('credentials', {email, password, callbackUrl: '/'} )
        setLoginInProgress(false)
    }

    return (
        <section className='mt-8'>
            <h1 className='text-center text-primary text-4xl mb-4'>
                Login
            </h1>
            <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
                <input disabled={loginInProgress} name='email' type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} required />
                <input disabled={loginInProgress} name='password' type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required />
                <button disabled={loginInProgress} type='submit'>Login</button>
                
                <div className='my-4 text-center text-gray-500'>or Login with Provider</div>
                <button type='button' className='flex gap-4 justify-center' onClick={()=> signIn('google', {callbackUrl: '/'})}>
                    <Image src='/google.png' width={32} height={24} />
                    Login with Google</button>
                <div className='my-4 text-center text-gray-500 border-t pt-4'>
                    Dont have an account?{' '}
                    <Link className='underline' href='/register'>Register here{' >>'}</Link>
                </div>
            </form>

        </section>
    )
}

export default LoginPage