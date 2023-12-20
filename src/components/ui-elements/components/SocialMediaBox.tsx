import Image from "next/image"
import Link from "next/link"

import discordIcon from "@/assets/discord-icon.svg"
import linkedInIcon from "@/assets/linkedin-icon.svg"
import githubIcon from "@/assets/github-icon.svg"
import xIcon from "@/assets/x-icon.svg"

const socialMediaAccounts = [
  {
    icon: discordIcon,
    href: '#',
    socialMediaName: "Discord"
  },
  {
    icon: linkedInIcon,
    href: '#',
    socialMediaName: "Linked In"
  },
  {
    icon: githubIcon,
    href: '#',
    socialMediaName: "Github"
  },
  {
    icon: xIcon,
    href: '#',
    socialMediaName: "X"
  }
]

export const SocialMediaBox = () => {
  return (
    <article>
      <p className="font-bold text-sm uppercase text-center text-headings lg:text-start">Encuentrame</p>
      <div className="flex w-full gap-4 justify-center items-center mt-4 lg:justify-start">
        {
          socialMediaAccounts.map(socialMedia => (<Link href={socialMedia.href} key={socialMedia.socialMediaName}><Image src={socialMedia.icon} alt={socialMedia.socialMediaName} width={24} height={24}/></Link>))
        }
      </div>
      <p className="text-center text-headings font-bold text-sm mt-4 lg:text-start">hello@mydomain.com</p>
    </article>
  )
}
