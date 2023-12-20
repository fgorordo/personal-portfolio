import { ProjectsViewer } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { IoPlayOutline, IoArrowForward } from "react-icons/io5"

const ProjectsPage = () => {
  return (
    <main className="pt-[120px] px-5 bg-background-alt pb-10">
      <h1 className="text-4xl text-headings font-light">Mis <span className="text-primary text text-4xl font-bold">Proyectos</span></h1>
      {/* Filter for keywords- */}
      <ProjectsViewer />
    </main>
  );
};

export default ProjectsPage;