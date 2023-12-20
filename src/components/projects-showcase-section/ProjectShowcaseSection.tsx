import Image from 'next/image';
import Link from 'next/link';

import { ProjectCard } from "@/components";


export const ProjectsShowcase = () => {
    return (
        <section className='px-5 py-14 flex flex-col gap-10 bg-background-alt'>
            <article className='flex flex-col gap-2'>
                <h2 className='text-4xl text-headings'>Conoce <span className='text-primary font-bold'>mi trabajo</span></h2>
                <p>Cada proyecto está pensado y construido para el usuario, cuidando cada detalle desde lo estético hasta lo funcional para un resultado bonito, optimo y seguro.</p>
            </article>
            <article className='flex flex-col gap-6'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </article>
        </section>
    )
}
