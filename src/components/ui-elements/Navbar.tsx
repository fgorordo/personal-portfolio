"use client";

import Image from 'next/image'
import Link from 'next/link'
import { IoClose, IoMenuOutline } from "react-icons/io5"

import { IconButton, MenuItem, MobileMenu } from '..'
import { useEffect, useState } from 'react';




export const Navbar = () => {
    // TODO: FIX THIS STATE IS WORKING ON TRUE
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const [navColor, setNavColor] = useState(false);

    const changeNavColor = () => {
        if (window.scrollY > 1) {
            setNavColor(true)
        } else {
            setNavColor(false)
        }
    }

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', changeNavColor)
    }

    const toggleMenu = () => {
        return setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`py-6 flex justify-between top-0 fixed px-5 md:px-8 left-0 right-0 border-b-2 ${isMenuOpen ? 'border-background-alt' : 'border-transparent'} ${isMenuOpen ? '' : 'bg-background'} ${navColor ? 'bg-background transition-colors' : ''}`}>
            <Link href={'/'} className='flex gap-2 items-center'>
                <Image src={"/logo.svg"} width={40} height={40} alt='Fernando Gorordo Logo' />
                <div>
                    <h1 className='font-bold text-headings'>Fernando Gorordo</h1>
                    <h2 className='font-bold text-headings text-sm'>Fullstack Developer</h2>
                </div>
            </Link>

            <IconButton icon=
                {
                    isMenuOpen
                        ? <IoMenuOutline className="w-8 h-8 text-headings hover:text-secondary transition-all" />
                        : <IoClose className="w-8 h-8 text-headings hover:text-secondary transition-all" />
                }
                onClick={toggleMenu}
            />

            <MobileMenu isMenuOpen={isMenuOpen} onClick={toggleMenu} />
        </header>
    )
}
