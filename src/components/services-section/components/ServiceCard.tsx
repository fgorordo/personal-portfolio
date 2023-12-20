import Image from "next/image";

interface Props {
  cardTitle: string;
  cardBody: string;
  iconAlt: string;
  iconSrc: string;
}


export const ServiceCard = ({cardTitle, cardBody, iconSrc, iconAlt}: Props) => {
  return (
    <article className="p-6 flex flex-col gap-6 items-center">
      {/* TODO ICONS */}
      <Image alt={iconAlt} src={iconSrc} width={64} height={64} className=""/>

      <h2 className="font-bold text-xl text-headings text-center">{cardTitle}</h2>
      <p className="text-base text-center">{cardBody}</p>
    </article>
  )
}
