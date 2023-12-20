import Image from 'next/image'

import sectionIlustration from "@/assets/ilustration.svg";
import { BenefitCard } from "@/components";

const cards = [
    {
        title: 'Diseño Web & UX/UI',
        body: 'Accesibilidad y diseño responsivo que permite que todos los usuarios puedan acceder con facilidad desde cualquier dispositivo.'
    },
    {
        title: 'Frontend',
        body: 'Desde el desarrollo de API y el manejo de bases de datos hasta la implementación de autenticación y autorización seguras para crear soluciones tecnológicas robustas.'
    },
    {
        title: 'Backend',
        body: 'Desde la paleta de colores hasta la disposición, cada detalle es una expresión de creatividad y funcionalidad, creando experiencias digitales memorables e impactantes.'
    },
    {
        title: 'Metodologías Ágiles',
        body: 'Implemento metodologías ágiles como una sinfonía de innovación, llevando cada proyecto desde la planificación hasta la entrega con rapidez y adaptabilidad.'
    }
];

export const BenefitsSection = () => {
    return (
        <section className='px-5 py-14 flex flex-col gap-10'>
            <article>
                <h2 className='text-4xl text-headings'>
                    <span className='font-bold text-primary'>Verstiliadad </span>
                    en el mundo digital.
                </h2>
                <Image alt='Ilustration' src={sectionIlustration} width={350} height={350} />
            </article>

            <article className='flex flex-col gap-4'>
                {
                    cards.map( card => (<BenefitCard title={card.title} body={card.body} key={card.title} />))
                }
            </article>
        </section>
    );
};
