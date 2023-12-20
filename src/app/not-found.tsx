import Link from "next/link";

const NotFound = () => {
    return (
        <section className="min-h-[calc(100vh-120px)] px-5 flex justify-center items-center flex-col gap-5">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl text-headings text-center"><span className="font-bold">404</span> - No encontrado</h2>
                <p>Ooops! Parece que nos perdimos...</p>
            </div>
            <div className="w-full flex flex-col gap-5">
                <p className="text-center">Dejame echarte una mano:</p>
                <nav>
                    <ul className="flex flex-row justify-between">
                        <li>
                            <Link href={"/projects"} className="underline text-sm text-headings">Proyectos</Link>
                        </li>
                        <li>
                            <Link href={"/projects"} className="underline text-sm text-headings">Sobre Mí</Link>
                        </li>
                        <li>
                            <Link href={"/projects"} className="underline text-sm text-headings">Curriculum</Link>
                        </li>
                        <li>
                            <Link href={"/projects"} className="underline text-sm text-headings">Contacto</Link>
                        </li>
                    </ul>
                </nav>
                <Link href={"/"} className="text-center block text-secondary underline text-xl">Volver al inicio</Link>
            </div>
        </section>
    )
}

export default NotFound;
