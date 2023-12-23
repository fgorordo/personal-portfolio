import Link from 'next/link';

import styles from "./background.module.css";



export const Testeando = () => {
    return (
        <section className={`${styles.background} pt-24 px-24 pb-8 h-screen flex flex-col justify-between`}>
            <article>
                <div>
                    <h2 className='text-xl'>Programador, Diseñador Web y UX/UI.</h2>
                    <h1 className='text-4xl text-headings font-bold'>FERNANDO GORORDO</h1>
                    <p className=''>Creo experiencias y servicios digitales enfocados en el usuario,</p>
                    <div className='mt-10 flex gap-8'>
                        {/* <LinkButton color='primary' href='/projects' buttonText='Mis proyectos' /> */}
                        {/* <LinkButton color='secondary' href='/contact' buttonText='Enviame un mensaje' /> */}
                    </div>
                </div>
                <div>
                    
                </div>
            </article>
            {/* <article className='grid grid-cols-3 grid-rows-1 justify-center items-center w-full gap-8'>
                <div className='rounded-xl bg-background-alt p-8 text-headings border border-input-stroke'>
                    <h4 className='text-lg'>Box Title</h4>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis blanditiis pariatur fugiat repellendus, enim mollitia hic praesentium aliquam veniam quis?</p>
                    <Link href={"#"}>Leer más</Link>
                </div>
                <div className='rounded-xl bg-background-alt p-8 text-headings border border-input-stroke'>
                    <h4 className='text-lg'>Box Title</h4>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis blanditiis pariatur fugiat repellendus, enim mollitia hic praesentium aliquam veniam quis?</p>
                    <Link href={"#"}>Leer más</Link>
                </div>
                <div className='rounded-xl bg-background-alt p-8 text-headings border border-input-stroke'>
                    <h4 className='text-lg'>Box Title</h4>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis blanditiis pariatur fugiat repellendus, enim mollitia hic praesentium aliquam veniam quis?</p>
                    <Link href={"#"}>Leer más</Link>
                </div>
            </article> */}
        </section>
    )
}
