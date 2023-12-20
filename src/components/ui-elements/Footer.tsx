import Image from "next/image"
import Link from "next/link"
import { Button, CopyrightText, SocialMediaBox } from ".."

export const Footer = () => {
  return (
    <footer className="px-5 py-14 flex flex-col gap-10">
      <div className="flex justify-between">
        <Link href={'/'} className='flex gap-2 items-center'>
          <Image src={"/logo.svg"} width={40} height={40} alt='Fernando Gorordo Logo' />
          <div>
            <h1 className='font-bold text-headings text-[12px]'>Fernando Gorordo</h1>
            <h2 className='font-bold text-headings text-[12px]'>Fullstack Developer</h2>
          </div>
        </Link>
        <SocialMediaBox />
      </div>

      <nav className="flex flex-col gap-6">
        <h6 className="uppercase font-bold text-headings text-xl">Explorar</h6>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/" className="text-xl">Inicio</Link>
          </li>
          <li>
            <Link href="/about-me" className="text-xl">Sobre Mí</Link>
          </li>
          <li>
            <Link href="/projects" className="text-xl">Proytectos</Link>
          </li>
          <li>
            <Link href="/resume" className="text-xl">Curriculum</Link>
          </li>
          <li>
            <Link href="/contact" className="text-xl">Contacto</Link>
          </li>
        </ul>
      </nav>

      <article>
        <h6 className="text-headings font-bold text-xl">Entérate de tods las actualizaciones y mis trabajos</h6>
        {/* Form */}
      </article>

      <article>
        <Button buttonText="Descargar C.V." className="w-full"/>
      </article>
      <CopyrightText />
    </footer>
  )
}
