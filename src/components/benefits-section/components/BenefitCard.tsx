import Image from 'next/image';

import bulletIcon from "@/assets/bullet-icon.svg";

interface Props {
    title: string;
    body:string;
}

export const BenefitCard = ({ title, body }:Props) => {
    return (
        <div className='flex gap-4'>
            <div className='flex gap-4 flex-col justify-center items-center'>
                <Image src={bulletIcon} alt='Bullet Icon' width={48} height={48} />
                <div className='w-full h-full flex justify-center items-center flex-col'>
                    <div className='bg-secondary w-[2px] min-h-full'></div>
                </div>
            </div>
            <div className='p-6 bg-background-alt flex-1 rounded-2xl'>
                <h6 className='text-lg text-headings font-bold'>{title}</h6>
                <p>{body}</p>
            </div>
        </div>
    )
}
