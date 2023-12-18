"use client";

import Image from 'next/image'
import Link from 'next/link'
import { IoClose, IoMenuOutline } from "react-icons/io5"

import { IconButton, MenuItem } from '..'
import { useState } from 'react';

interface IMenuOptions {
    menuText: string;
    url: string;
}

const MENU_OPTIONS: IMenuOptions[] = [
    {
        menuText: 'Inicio',
        url: '/'
    },
    {
        menuText: 'Proyectos',
        url: '/projects'
    },
    {
        menuText: 'Sobre Mí',
        url: '/about'
    },
    {
        menuText: 'Curriculum',
        url: '/resume'
    },
    {
        menuText: 'Contacto 👋',
        url: '/contact'
    },
];


export const Navbar = () => {
    // TODO: FIX THIS STATE IS WORKING ON TRUE
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const toggleMenu = () => {
        console.log(isMenuOpen)
        return setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`py-9 flex justify-between top-0 fixed px-5 left-0 right-0 ${ isMenuOpen ? 'bg-background' : ''}`}>
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
                    ? <IoMenuOutline className="w-8 h-8 text-headings hover:text-secondary transition-all"/> 
                    : <IoClose className="w-8 h-8 text-headings hover:text-secondary transition-all"/>
                } 
                onClick={ toggleMenu }
            />

            <nav className={`w-full h-[calc(100vh-120px)] bg-background top-[120px] left-0 z-10 ${isMenuOpen ? 'hidden':'absolute'} transition-opacity duration-200`}>
                <ul className='flex flex-col gap-4'>
                    {
                        MENU_OPTIONS.map( item => (
                            <MenuItem menuText={item.menuText} onClick={() => setIsMenuOpen(!isMenuOpen)} url={item.url} key={item.url}/>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}
