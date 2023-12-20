import Link from 'next/link';
import { IoArrowForward, IoPlayOutline } from 'react-icons/io5';

interface Props {
    projectTitle: string;
    projectDescription: string;
    projectDemoUrl: string;
    projectDetailUrl: string;
    projectUserCredential: string;
    projectUserPassword: string;
}   

export const ProjectCard = ({projectTitle, projectDemoUrl, projectDetailUrl, projectDescription, projectUserCredential, projectUserPassword}: Props) => {
    return (
        <article className="bg-background p-4 rounded-2xl flex gap-4">
            <div>
                <h2 className="font-bold text-headings text-lg">{projectTitle}</h2>
                <p>{projectDescription}</p>
                <div className="py-2">
                    <h6 className="text-headings text-sm my-1">Credenciales para acceder a la demo:</h6>
                    <h6 className="text-headings text-sm">Usuario: <span className="text-text">{projectUserCredential}</span></h6>
                    <h6 className="text-headings text-sm">Contraseña: <span className="text-text">{projectUserPassword}</span></h6>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <Link href={projectDetailUrl} className="w-full font-bold border-2 border-primary rounded-lg py-3 text-primary text-center flex items-center justify-center gap-2" >Ver más <IoArrowForward /></Link>
                    <Link href={projectDemoUrl}  rel="noopener noreferrer" target="_blank" className="w-full font-bold border-2 border-secondary rounded-lg py-3 text-secondary text-center flex items-center justify-center gap-2" >Live demo <IoPlayOutline /></Link>
                </div>
            </div>
        </article>
    )
}
