import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const navbar = () => {
  return (
        <header className="py-5 px-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/"></Link>
                <Image src="/logo.png" alt="logo" width={144} height={30}/>

            </nav>
      
    </header>
  )
}

export default navbar
