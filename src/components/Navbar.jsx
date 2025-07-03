import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-10 bg-gray-200 p-4 absolute top-0 left-0 w-full '>
        <Link href="/">Home</Link>
        <Link href="/userData">User Data</Link>
    </div>
  )
}

export default Navbar