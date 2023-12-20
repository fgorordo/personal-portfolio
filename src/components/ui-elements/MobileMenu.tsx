import { CopyrightText, MenuItem, SocialMediaBox } from "..";

interface IMenuOptions {
  menuText: string;
  url: string;
}

const MENU_OPTIONS: IMenuOptions[] = [
  {
    menuText: 'Inicio',
    url: '/'
  },
  {
    menuText: 'Proyectos',
    url: '/projects'
  },
  {
    menuText: 'Sobre Mí',
    url: '#about-me'
  },
  {
    menuText: 'Curriculum',
    url: '/resume'
  },
  {
    menuText: 'Contacto 👋',
    url: '/contact'
  },
];

interface Props {
  isMenuOpen: boolean;
  onClick: () => void;
}

export const MobileMenu = ({ isMenuOpen, onClick }: Props) => {
  return (
    <nav className={`pb-6 w-full h-[calc(100vh-96px)] max-h-[calc(100vh-96px)] bg-background top-[96px] left-0 ${isMenuOpen ? 'hidden' : 'absolute'} transition-opacity duration-200 overflow-hidden flex flex-col justify-between`}>
      <ul className='flex flex-col gap-4 py-6'>
        {
          MENU_OPTIONS.map(item => (
            <MenuItem menuText={item.menuText} onClick={onClick} url={item.url} key={item.url} />
          ))
        }
      </ul>
      <SocialMediaBox />
      <CopyrightText />
    </nav>
  )
}
