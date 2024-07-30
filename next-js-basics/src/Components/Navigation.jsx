"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navigation = () => {
    const pathName = usePathname()
    const links = [
      {
        title: "About",
        path: "/about",
      },
      {
        title: "Home",
        path: "/home",
      },
      {
        title: "Services",
        path: "/services",
      },
      {
        title: "Contact",
        path: "/contact",
        },
        {
            title: "Blogs",
            path : "/blogs"
      }
        
    ];
    const router = useRouter() // for navigating or redirecting to a different page use 'next/navigation'
    const handleRedirect = () => {
        router.push('/login')
    }
    return (
      <div className="flex items-center justify-between p-4">
        <div>
          <h1 className='font-bold text-4xl text-green-500'>FlixBus</h1>
        </div>
        <div >
          <nav className="flex gap-4 items-center">
            {links?.map((link) => (
              <Link
                className={`${
                  pathName === link.path && "text-blue-500 border-2 p-1 border-blue-800 rounded-md"
                }`}
                key={link.path}
                href={link.path}
              >
                {link.title}
              </Link>
            ))}
          </nav>
            </div>
            <div>
                <button onClick={handleRedirect} className='bg-blue-700 text-white p-2 rounded-xl'>Log In</button>
            </div>
      </div>
    );
};

export default Navigation;