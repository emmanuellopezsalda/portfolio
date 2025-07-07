import senagist from "../assets/senagist.png"
import elitexpress from "../assets/elitexpress.png"
export const PROJECTS = [
    {
        name: "SENAGIST",
        description: "Sistema web diseñado para que los técnicos del SENA registren y gestionen los mantenimientos realizados a maquinaria dentro del complejo. Permite llevar un historial detallado de intervenciones, equipos y responsables. ",
        tecnologies: ["React", "Spring Boot", "MySQL"],
        badgeColors: ["blue", "green", "gray"],
        primaryColor: "green",
        logo: senagist
    },
    {
        name: "ELITEXPRESS",
        description: "Plataforma web para la gestión de envíos y paquetes, similar a empresas como TCC o Coordinadora. Permite a los usuarios registrar envíos, hacer seguimiento en tiempo real y gestionar entregas de forma eficiente. Desarrollada con WordPress para facilitar su mantenimiento y escalabilidad.",
        tecnologies: ["Wordpress"],
        badgeColors: ["blue"],
        primaryColor: "orange",
        logo: elitexpress
    },
];