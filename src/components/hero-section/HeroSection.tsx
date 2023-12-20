import Image from 'next/image';
import { Button } from '@/components';

export const HeroSection = () => {
    return (
        <section className='bg-hero-background w-full bg-cover bg-no-repeat bg-blend-darken pt-[120px] px-5 flex flex-col items-center gap-10 py-14 md:px-8 lg:px-24'>
            <div className='mt-10'>
                <Image src={"https://picsum.photos/200"} alt='Foto de Fernando Gorordo' width={174} height={174} className='rounded-full' />
            </div>
            <div className='flex flex-col justify-center gap-3 md: w-full'>
                <h3 className='text-3xl text-headings text-center'>¡Hola! Mi nombre es</h3>
                <h1 className='text-4xl text-center text-secondary'>Fernando Gorordo</h1>
                <div className='flex justify-between text-xl md:justify-evenly lg:justify-center gap-10'>
                    <h2 className='text-2xl'>Fullstack</h2>
                    <h2 className='text-2xl'>Diseñador Web</h2>
                    <h2 className='text-2xl'>UX/UI</h2>
                </div>
                <p className='text-center text-xl'>Construyo experiencias y servicios digitales transformando tazas de café en líneas de código.</p>
            </div>
            
            <Button buttonText='Contacto' color='secondary' variant='filled' href='/contact' size='large'/>
            {/* <Link href={"/"}>Test</Link> */}
        </section>
    )
}
