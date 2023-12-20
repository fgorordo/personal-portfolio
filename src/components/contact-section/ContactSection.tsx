import React from 'react'
import { ContactForm } from '@/components'

export const ContactSection = () => {
  return (
    <section className='px-5 py-14 bg-background-alt flex flex-col gap-10'>
        <article className='flex flex-col gap-2'>
            <h2 className='text-4xl text-headings'><span className='text-primary font-bold'>Hazme llegar tu mensaje,</span> solo te tomara un segundo</h2>
            <p>Siempre estoy interesado en nuevos proyectos 🚀, si deseas comenzar a implementar soluciones digitales en tu empresa, si tienes algún proyecto que necesite algunos ajustes o te gustaría tenerme en tu equipo te invito a que me dejes un mensaje.</p>
        </article>
        <ContactForm />
    </section>
  )
}
