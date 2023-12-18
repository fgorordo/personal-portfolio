import Link from "next/link";

interface Props {
    onClick: () => void;
    url: string;
    menuText: string;
}

export const MenuItem = ({onClick, url, menuText}: Props) => {
  return (
    <Link
      href={url}
      className="flex gap-5"
      onClick={onClick}
    >
      <div className="bg-secondary w-1 mr-5 min-h-full"></div>
      <li className="text-2xl list-disc py-4 font-bold">{menuText}</li>
    </Link>
  );
};
