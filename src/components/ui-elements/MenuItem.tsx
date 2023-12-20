import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    onClick: () => void;
    url: string;
    menuText: string;
}

export const MenuItem = ({onClick, url, menuText}: Props) => {

  const path = usePathname();

  return (
    <Link
      href={url}
      className="flex gap-5"
      onClick={onClick}
    >
      <div className={`w-1 mr-5 min-h-full ${path === url ? 'bg-secondary' : 'bg-background-alt'}`}></div>
      <li className={`text-2xl list-disc py-4 font-bold ${path === url ? 'text-headings' : ''}`}>{menuText}</li>
    </Link>
  );
};
