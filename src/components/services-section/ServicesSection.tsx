import desingIcon from "@/assets/design-icon.svg";
import solutionIcon from "@/assets/solution-icon.svg";
import webIcon from "@/assets/web-icon.svg"

import { ServiceCard } from "@/components";

const servicesCards = [
  {
    cardTitle: "Web’s Institucionales",
    cardBody: "Establecer presencia online es más importante que nunca y para eso tengo un basto arsenal de herramientas que se adaptan a las necesidades de cada institución o empresa.",
    iconSrc: webIcon,
    iconAlt: "Web Icon",
  },
  {
    cardTitle: "Rediseño de Webs",
    cardBody: "¿Quieres darle un toque nuevo a tu web? ¿O tal vez agregar una nueva sección? Estoy aquí para ayudarte, desde pequeñas modificaciones hasta reconstrucciones de sitios en su totalidad.",
    iconSrc: desingIcon,
    iconAlt: "Design Icon",
  },
  {
    cardTitle: "Soluciones Digitales",
    cardBody: "Descubre como la tecnología puede impactar en tu comercio o empresa, desde comercios electrónicos hasta sistemas de gestión completos completamente personalizados a tus necesidades.",
    iconSrc: solutionIcon,
    iconAlt: "Solution Icon",
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-14 px-5 grid grid-cols-1 md:px-8 lg:px-24 lg:grid-cols-3">
      {
        servicesCards.map(card => (
          <ServiceCard cardBody={card.cardBody} cardTitle={card.cardTitle} key={card.cardTitle} iconSrc={card.iconSrc} iconAlt={card.iconAlt} />
        ))
      }
    </section>
  )
}
