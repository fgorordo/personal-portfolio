import Image from 'next/image'

import sectionIlustration from "@/assets/ilustration.svg";
import { BenefitCard } from "@/components";

const cards = [
    {
        title: 'Diseño Web & UX/UI',
        body: 'Accesibilidad y diseño responsivo que permite que todos los usuarios puedan acceder con facilidad desde cualquier dispositivo.'
    },
    {
        title: 'Backend',
        body: 'Desde el desarrollo de API y el manejo de bases de datos hasta la implementación de autenticación y autorización seguras para crear soluciones tecnológicas robustas.'
    },
    {
        title: 'Frontend',
        body: 'Desde la paleta de colores hasta la disposición, cada detalle es una expresión de creatividad y funcionalidad, creando experiencias digitales memorables e impactantes.'
    },
    {
        title: 'Metodologías Ágiles',
        body: 'Implemento metodologías ágiles como una sinfonía de innovación, llevando cada proyecto desde la planificación hasta la entrega con rapidez y adaptabilidad.'
    }
];

export const BenefitsSection = () => {
    return (
        <section className='px-5 py-14 flex flex-col gap-10 md:px-8 lg:px-24 lg:flex-row'>
            <article className='md:flex md:items-center md:flex-col lg:flex-1 lg:gap-10'>
                <h2 className='text-4xl text-headings md:text-5xl'>
                    <span className='font-bold text-primary'>Verstiliadad </span>
                    en el mundo digital.
                </h2>
                <div>
                    <Image alt='Ilustration' src={sectionIlustration} width={480} height={480} />
                </div>
            </article>

            <article className='flex flex-col gap-4 lg:flex-1'>
                {
                    cards.map(card => (<BenefitCard title={card.title} body={card.body} key={card.title} />))
                }
            </article>
        </section>
    );
};
