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
    <article className="">
      <p className="font-bold text-sm uppercase text-center text-headings">Encuentrame</p>
      <div className="flex w-full gap-4 justify-center items-center mt-4">
        {
          socialMediaAccounts.map(socialMedia => (<Link href={socialMedia.href} key={socialMedia.socialMediaName}><Image src={socialMedia.icon} alt={socialMedia.socialMediaName} width={24} height={24}/></Link>))
        }
      </div>
    </article>
  )
}
