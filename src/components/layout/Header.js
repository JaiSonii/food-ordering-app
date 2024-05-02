'use client'
import React from 'react'
import Link from "next/link";
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
  const {data : session, status} = useSession();
  let userName

  if (session) {
    userName = session.user.name || session.user.email
    if(userName.includes(' ')){
      userName = userName.split(' ')[0]
    }
    console.log(userName)
  }
  
  
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link className="text-primary font-semibold text-2xl" href="/">ST PIZZA</Link>
        <Link href={'/'}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>

      </nav>

      <nav className='flex items-center gap-4 text-gray-500 font-semibold'>
        {
          status == 'authenticated' && (
            <>
            <Link href={'/profile'} className='whitespace-nowrap'>Hello, {userName}</Link>
            <button className="bg-primary rounded-full text-white px-8 py-2" onClick={()=>signOut()}>Logout</button>
            </>
           
          )
        }
        {
          status != 'authenticated' && (
            <>
              <Link href={'/login'}>Login</Link>
              <Link className="bg-primary rounded-full text-white px-8 py-2" href={'/register'}>Register</Link>
            </>
          )
        }



      </nav>
    </header>
  )
}

export default Header