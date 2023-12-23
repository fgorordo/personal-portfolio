import Image from 'next/image';
import { Button } from '@/components';
import Link from 'next/link';
import { IoArrowDown, IoArrowForward, IoChevronForward, IoDownload, IoDownloadOutline, IoLogoBehance, IoLogoDiscord, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoLogoXing, IoMail, IoMailOutline } from 'react-icons/io5';
import {FiExternalLink} from "react-icons/fi"
import styles from "./background.module.css";

import discordIcon from "@/assets/discord-icon.svg"
import githubIcon from "@/assets/github-icon.svg"
import linkedInIcon from "@/assets/linkedin-icon.svg"
import xIcon from "@/assets/x-icon.svg"


const SocialMediaItem = () => {
    return (
        <div className='hidden md:block mt-8 rounded-xl p-4'>
            <h3 className='mb-4 font-bold uppercase text-headings text-sm'>ENCUENTRAME EN:</h3>
            <div className='flex gap-8'>
                <Link href={"/"} className='bg-background border-input-stroke border rounded-full p-2 shadow-[0px_0px_32px_rgba(127,90,240,0.5)] hover:shadow-[0px_0px_40px_rgba(127,90,240,1)] hover:text-primary hover:border-primary transition-all duration-300'><IoLogoGithub size={16} /></Link>
                <Link href={"/"} className='bg-background border-input-stroke border rounded-full p-2 shadow-[0px_0px_32px_rgba(127,90,240,0.5)] hover:shadow-[0px_0px_40px_rgba(127,90,240,1)] hover:text-primary hover:border-primary transition-all duration-300'><IoLogoDiscord size={16} /></Link>
                <Link href={"/"} className='bg-background border-input-stroke border rounded-full p-2 shadow-[0px_0px_32px_rgba(127,90,240,0.5)] hover:shadow-[0px_0px_40px_rgba(127,90,240,1)] hover:text-primary hover:border-primary transition-all duration-300'><IoLogoLinkedin size={16} /></Link>
                <Link href={"/"} className='bg-background border-input-stroke border rounded-full p-2 shadow-[0px_0px_32px_rgba(127,90,240,0.5)] hover:shadow-[0px_0px_40px_rgba(127,90,240,1)] hover:text-primary hover:border-primary transition-all duration-300'><IoLogoBehance size={16} /></Link>
            </div>
        </div>
    );
};

interface Props {
    href: string;
    color: "primary" | "secondary";
    buttonText: string;
}

const LinkButton = ({ href, color, buttonText }: Props) => {
    return (
        <Link
            href={href}
            className={`
                text-base
                font-bold
                lg:text-sm
                border-2
                border-${color}
                py-4
                lg:py-3
                px-8
                rounded-xl
                text-${color}
                ${color === "primary"
                    ? 'hover:text-indigo-400'
                    : 'hover:text-emerald-400'
                }
                bg-${color}
                bg-opacity-20
                hover:bg-opacity-30
                text-center
                transition-all
                ${color === "primary"
                    ? 'shadow-[0px_8px_32px_rgba(127,90,240,0.3)] hover:shadow-[0_8px_32px_rgba(127,90,240,0.5)]'
                    : 'shadow-[0px_8px_32px_rgba(44,185,125,0.3)] hover:shadow-[0_8px_32px_rgba(44,185,125,0.5)]'
                }
                `}
        >
            {buttonText}
        </Link>
    );
};

export const HeroSection = () => {
    return (
        <section className={`${styles.background} px-24 pt-24 min-h-screen flex flex-col justify-between pb-8`}>
            <div className='bg-headings rounded-full p-2 text-sm text-background mx-auto mt-10'>Actualmente estoy trabajando en:     <span className='font-bold'>ID For Ideas - Proyecto #3</span></div>
            <div className='my-auto'>
                <h2 className='text-center text-xl'>Programador, Diseñador Web y UX/UI.</h2>
                <h1 className='text-4xl text-center text-headings'>Hola, mi nombre es <span className='text-primary font-bold'>Fernando.</span></h1>
                <h3 className='text-center mt-4 max-w-4xl mx-auto'>Creador de <span className='font-bold text-headings'>experiencias y servicios digitales</span>, disfruto colaborando en equipos multidisciplinarios, aportando <span className='font-bold text-headings'>soluciones creativas</span> en cada etapa del desarrollo. Mi <span className='font-bold text-headings'>enfoque integral</span> y entusiasmo por la innovación garantizan contribuciones valiosas a cualquier proyecto.</h3>
                <div className='flex justify-center gap-8 mt-8'>
                    <LinkButton buttonText='Mis proyectos' color='primary' href='/projects' />
                    <LinkButton buttonText='Enviame un mensaje' color='secondary' href='/projects' />
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <SocialMediaItem />
                <div className='bg-background-alt p-4'>
                    <h1>Testing</h1>
                </div>
            </div>
        </section>
    );
}
