import Image from 'next/image';
import { Button } from '@/components';
import Link from 'next/link';
import { IoArrowForward, IoChevronForward } from 'react-icons/io5';
import styles from "./background.module.css";

import discordIcon from "@/assets/discord-icon.svg"
import githubIcon from "@/assets/github-icon.svg"
import linkedInIcon from "@/assets/linkedin-icon.svg"
import xIcon from "@/assets/x-icon.svg"

export const HeroSec = () => {
    return (
        <section className={`${styles.background} h-screen pt-24 md:pt-20 w-full px-5 md:px-8 lg:px-24`}>
            <div className=''>
                    <div>
                        <Image src={"https://picsum.photos/200"} alt='Foto de Fernando Gorordo' width={180} height={180} className='rounded-full mx-auto my-8 shadow-[0px_8px_32px_rgba(127,90,240,0.3)] hover:shadow-[0_8px_32px_rgba(127,90,240,0.8)] border-2 border-input-stroke transition-all duration-500' />
                    </div>
                    <div className=''>
                        <h1 className='text-4xl text-center text-headings'>Hola, mi nombre es <span className='text-primary font-black'>Fernando</span>.</h1>
                        <h2 className='text-headings text-xl mt-4 text-center'>Creador de experiencias y servicios digitales, <span className='font-bold text-secondary'>programador</span>, <span className='font-bold text-secondary'>diseñador web</span> y entusiasta <span className='font-bold text-secondary'>UX/UI.</span></h2>
                        {/* <h2 className='text-xl text-secondary mt-4 text-center md:text-left'>Desarrollador fullstack, diseñador web, UX/UI y más +.</h2> */}
                        <p className='mt-4 text-base text-center lg:text-left'>
                                Con una pasión por el <span className='text-headings font-semibold'>trabajo en equipo y la adaptabilidad a entornos dinámicos.</span> Mi enfoque se destaca por la <span className='text-headings font-semibold'>resolución creativa de problemas,</span> y siempre estoy en búsqueda de nuevos y desafiantes proyectos. Con una firme <span className='text-headings font-semibold'>mentalidad de mejora continua</span>, busco superar expectativas y aportar soluciones innovadoras en cada fase del desarrollo.
                            </p>
                    </div>

                    <div className='mt-10 flex flex-col md:flex-row gap-8 md:justify-center'>
                        <Link
                            href="/contact"
                            // style={{ boxShadow: '0 8px 32px rgba(127,90,240,0.3)'}}
                            className='
                                text-base
                                font-bold
                                lg:text-sm
                                border-2
                                border-primary
                                py-4
                                lg:py-3
                                px-8
                                rounded-xl
                                text-primary
                                hover:text-indigo-400
                                bg-primary
                                bg-opacity-20
                                hover:bg-opacity-30
                                text-center
                                transition-all
                                shadow-[0px_8px_32px_rgba(127,90,240,0.3)]
                                hover:shadow-[0_8px_32px_rgba(127,90,240,0.5)]
                                '
                        >
                            Descargar C.V
                        </Link>

                        <Link
                            href="/contact"
                            // style={{ boxShadow: '0 8px 32px rgba(127,90,240,0.3)'}}
                            className='
                                text-base
                                font-bold
                                lg:text-sm
                                border-2
                                border-secondary
                                py-4
                                lg:py-3
                                px-8
                                rounded-xl
                                text-secondary
                                hover:text-emerald-400
                                bg-secondary
                                bg-opacity-20
                                hover:bg-opacity-30
                                text-center
                                transition-all
                                shadow-[0px_8px_32px_rgba(44,185,125,0.3)]
                                hover:shadow-[0_8px_32px_rgba(44,185,125,0.5)]
                                '
                        >
                            Hablemos
                        </Link>
                    </div>
                </div>
                <div className='flex w-full justify-between'>
                    {/* <SocialMediaItem /> */}
                    <div>
                        <h3 className='font-bold text-headings mb-4'>Proyectos</h3>
                        <div className='grid grid-cols-2 gap-8'>
                            <div className='bg-background bg-opacity-30 col-span-1 rounded-xl border border-input-stroke p-4 text-headings flex items-center gap-4 text-xl'>
                                <span className='text-6xl font-bold'>10</span> Proyectos finalizados
                            </div>
                            <div className='bg-background bg-opacity-30 col-span-1 rounded-xl border border-input-stroke p-4'>
                                Card #2
                            </div>
                        </div>
                    </div>

                </div>
        </section>
    )
}
