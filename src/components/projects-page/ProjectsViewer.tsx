import { ProjectCard } from "@/components";

const projects = [
    {
        projectTitle: "Zen Hogar - Eccomerce",
        projectDescription: "Comercio electronico que permite gestionar usuarios de manera facil y sencilla, sistema de pagos en linea completamente seguro y control integral de stock y productos.",
        projectDemoUrl: "#",
        projectDetailUrl: "#",
        projectUserCredential: "jhondoe@google.com",
        projectUserPassword: "Demo2023",
    },
    {
        projectTitle: "Team Calendar",
        projectDescription: "Calendario de equipo donde cada usuario puede crear, modificar y eliminar eventos, y estos pueden ser visualizados por sus compañeros.",
        projectDemoUrl: "#",
        projectDetailUrl: "#",
        projectUserCredential: "calendar@google.com",
        projectUserPassword: "Demo2023",
    },
]

export const ProjectsViewer = () => {
    return (
        <section className="mt-4 grid grid-cols-1 gap-4">
            {
                projects.map(project => (<ProjectCard projectDemoUrl={project.projectDemoUrl} projectDescription={project.projectDescription} projectDetailUrl={project.projectDetailUrl} projectTitle={project.projectTitle} projectUserCredential={project.projectUserCredential} projectUserPassword={project.projectUserPassword} key={project.projectDemoUrl}/>))
            }
        </section>
    );
};
