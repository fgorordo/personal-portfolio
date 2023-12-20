interface Props {
    icon: JSX.Element,
    onClick: () => void;
}

export const IconButton = ({ icon, onClick } : Props) => {
  return (
    <button className='bg-background-alt rounded-full w-12 h-12 flex items-center justify-center md:hidden' onClick={onClick}>
        { icon }
    </button>
  )
}
