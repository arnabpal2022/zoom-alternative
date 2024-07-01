import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className='flex items-center gap-1'>
        <Image src="/icons/logo.svg" width={32} height={32} className='max-sm:size-10' alt="Yoom Logo" />
        <p className='text-white font-extrabold text-[26px] max-sm:hidden'> Yoom </p>
      </Link>

      <div className='flex-between gap-5'>
        <SignedIn>
          <UserButton />
        </SignedIn>
        
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar