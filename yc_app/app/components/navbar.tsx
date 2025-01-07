import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { auth } from '@/auth';

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="py-5 px-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>create</span>
              </Link>
              <form method="POST" action="/api/auth/signout">
                <button type="submit">
                  <span>sign out</span>
                </button>
              </form>
              <Link href={`/users/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form method="POST" action="/api/auth/signin/github">
              <button type="submit">
                <span>Log in</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
