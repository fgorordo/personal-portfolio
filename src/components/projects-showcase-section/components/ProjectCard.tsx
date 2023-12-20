import Image from 'next/image'
import Link from 'next/link'

export const ProjectCard = () => {
    return (
        <div className='bg-background rounded-2xl p-3 flex flex-col gap-4'>
            <div className='mx-auto'>
                <Image src={'https://picsum.photos/200'} alt='Project Cover Image' width={326} height={163} className='rounded-lg h-[163px]' />
            </div>
            <h6 className='text-lg font-bold text-headings'>E-Tech</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper cursus nisi id ultricies. Suspendisse ultricies nisi et purus iaculis, a congue massa vehicula.</p>
            <Link href={"#"} className='text-secondary underline'>Saber más</Link>
            <Link href={"#"} className='text-secondary underline'>Visita la demo</Link>
        </div>
    )
}
