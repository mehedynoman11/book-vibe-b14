'use client'
import Image from 'next/image';
import logo from "@/assets/book.ico"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathName = usePathname();
    const links = <>
    <li><Link className={`font-bold${pathName === '/books'? "border-b-blue-500 bg-blue-100 border-b-2 font-semibold" : ""}`} href={'/books'}>Books</Link></li>
    <li><Link className={`font-bold${pathName === '/listedbooks'? "border-b-blue-500 bg-blue-100 border-b-2 font-semibold" : ""}`} href={'/listedbooks'}>Listed Books</Link></li>
    
    
    </>
    return (
        <nav className='bg-base-100 shadow-sm px-4 sm:px-6 lg:px-0 sticky top-0 z-50'>
            <div className="navbar container mx-auto max-w-275">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                    <Link href={'/'} className='flex gap-2 items-center'>
                        <Image className='w-6 sm:w-10' loading='eager' width={50} height={50} src={logo} alt='Logo'/>
                        <button className="btn-ghost btn-sm sm:btn-lg text-sm sm:text-lg md:text-xl">Book Vibe</button>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-2">
                    <button className="btn btn-success btn-xs sm:btn-lg text-white">Sign In</button>
                    <button className="btn btn-error btn-xs sm:btn-lg text-white">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;