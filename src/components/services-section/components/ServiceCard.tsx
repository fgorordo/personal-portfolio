import Image from "next/image";

interface Props {
  cardTitle: string;
  cardBody: string;
  iconAlt: string;
  iconSrc: string;
}


export const ServiceCard = ({cardTitle, cardBody, iconSrc, iconAlt}: Props) => {
  return (
    <article className="p-6 flex flex-col gap-6 items-center md:items-start">
      {/* TODO ICONS */}
      <Image alt={iconAlt} src={iconSrc} width={64} height={64} className=""/>

      <h2 className="font-bold text-xl text-headings text-center md:text-start">{cardTitle}</h2>
      <p className="text-base text-center md:text-start">{cardBody}</p>
    </article>
  )
}
