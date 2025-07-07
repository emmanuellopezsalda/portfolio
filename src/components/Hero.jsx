import { Badge } from "./Badge";
import image from "../assets/image1.png"
import { SocialButton } from "./SocialButton";
import { GitHubIcon } from "./icons/GithubIcon";
import { EmailIcon } from "./icons/EmailIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { Project } from "./Project";
import { PROJECTS } from "../data/projects.js";
import { JOBS } from "../data/jobs";
import { Job } from "./Job";
import { HtmlIcon } from "./icons/HtmlIcon";
import { CssIcon } from "./icons/CssIcon";
import { JsIcon } from "./icons/JsIcon";
import { ReactIcon } from "./ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { FigmaIcon } from "./icons/FigmaIcon";
import { GitIcon } from "./icons/GitIcon";
import { GithubIconBig } from "./icons/GithubIconBig";
import { TerminalIcon } from "./icons/TerminalIcon";
import { VSCodeIcon } from "./icons/VScodeIcon";
import { NpmIcon } from "./icons/NpmIcon";
import { WordPressIcon } from "./icons/WordPressIcon";
import { PythonIcon } from "./icons/PythonIcon";
import { NodeJsIcon } from "./icons/NodeJsIcon";
import { LaravelIcon } from "./icons/LaravelIcon";
import { ExpressJsIcon } from "./icons/ExpressJsIcon";
import { MySqlIcon } from "./icons/MySqlIcon";
import { MongoDBIcon } from "./icons/MongoDBIcon";
import { ApacheIcon } from "./icons/ApacheIcon";

export const Hero = () => {
    return (
        <main className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 text-white">
            <section id="home" className="min-h-screen flex items-center justify-center px-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 w-full">
                    <div className="flex-1 space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl font-bold">
                                Hola, <span className="text-purple-400">soy Emmanuel</span>
                            </h1>
                            <div className="flex items-center gap-3">
                                <Badge>Disponible para trabajar</Badge>
                            </div>
                        </div>

                        <p className="text-xl md:text-2xl text-gray-300 font-medium">
                            Desarrollador Fullstack
                        </p>

                        <div className="space-y-4">
                            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                                <span className="text-orange-400">Tecnólogo en análisis y desarrollo de software</span>,
                                apasionado por la tecnología y con muchas ganas de seguir aprendiendo y adquiriendo nuevas habilidades.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6">
                            <SocialButton href="https://www.linkedin.com/in/emmanuel-lópez-saldarriaga-720179303" icon={LinkedinIcon} text="Linkedin" />
                            <SocialButton href="https://github.com/emmanuellopezsalda" icon={GitHubIcon} text="GitHub" />
                            <SocialButton href="#" icon={EmailIcon} text="el096508@gmail.com" />
                        </div>
                    </div>

                    <div className="hidden md:block flex-shrink-0">
                        <div className="w-80 h-80 rounded-full p-1 bg-gradient-to-br from-violet-400 to-blue-600">
                            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                                <img
                                    src={image}
                                    alt="foto"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="px-8 py-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        <span className="text-purple-400">Proyectos</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {PROJECTS.map((project, index) => (
                            <Project
                                key={index}
                                name={project.name}
                                description={project.description}
                                tecnologies={project.tecnologies}
                                badgeColors={project.badgeColors}
                                primaryColor={project.primaryColor}
                                img={project.logo}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="experience" className="px-8 py-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        <span className="text-purple-400">Experiencia</span>
                    </h2>

                    <div className="space-y-8">
                        {JOBS.map((job, index) => (
                            <Job
                                key={index}
                                name={job.name}
                                company={job.company}
                                period={job.period}
                                description={job.description}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section id="about" className="px-8 py-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        <span className="text-purple-400">Sobre mi</span>
                    </h2>
                    <div className="space-y-8">
                        <p className="text-gray-200">
                            Hola 👋, soy Emmanuel López, <strong>Tecnólogo en Análisis y Desarrollo de Software</strong> Inicié en la programación por curiosidad y hoy tengo experiencia construyendo soluciones web útiles para entornos reales.
                        </p>
                        <p className="text-gray-200">
                            Entre mis proyectos destaco el desarrollo de <span className="text-green-400">SENAGIST</span>, una plataforma interna para técnicos del SENA que permite registrar mantenimientos de maquinaria, y <span className="text-orange-400">ELITEXPRESS</span>, una aplicación para la gestión de envíos tipo TCC. También he implementado y personalizado el sistema de código abierto <span className="text-sky-300">GLPI</span> para optimizar la gestión de activos e incidencias en entornos empresariales.
                        </p>
                        <p className="text-gray-200">
                            Me apasiona seguir aprendiendo y crecer profesionalmente. Disfruto enfrentar nuevos retos de desarrollo y aportar soluciones eficientes, siempre buscando escribir código limpio y mantener buenas prácticas.
                        </p>
                    </div>
                    <div className="mt-8 w-full flex items-center justify-center">
                        <a
                            href="/Emmanuel_Lopez_RESUME.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 
                            bg-gradient-to-r from-purple-600 to-purple-700 
                            text-white font-semibold rounded-xl
                            hover:from-purple-700 hover:to-purple-800
                            hover:shadow-lg hover:shadow-purple-500/25
                            hover:scale-105 hover:-translate-y-0.5
                            transition-all duration-300 ease-out
                            border border-purple-500/30
                            backdrop-blur-sm"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            Ver Curriculum
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <section id="skills" className="px-8 py-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        <span className="text-purple-400">Tecnologias</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-center mb-8 text-xl font-bold  lg:text-4xl lg:break-words bg-gradient-to-t from-purple-400 to-violet-400 dark:from-purple-400 dark:to-violet-500 bg-clip-text  text-transparent">Frontend</h3>
                            <ul className="grid grid-cols-3 gap-4 ">
                                <li className="rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <HtmlIcon />
                                    <span className=" text-sm w-full text-center">HTML</span>
                                </li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <CssIcon />
                                    <span class=" text-sm w-full text-center">CSS</span></li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <JsIcon />
                                    <span class=" text-sm w-full text-center">JavaScript</span></li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <ReactIcon />
                                    <span class=" text-sm w-full text-center">ReactJS</span></li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <TailwindIcon />
                                    <span class=" text-sm w-full text-center">TailwindCSS</span></li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <FigmaIcon />
                                    <span class=" text-sm w-full text-center">Figma</span></li>
                            </ul>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-center mb-8 text-xl font-bold  lg:text-4xl lg:break-words bg-gradient-to-t from-purple-400 to-violet-400 dark:from-purple-400 dark:to-violet-500 bg-clip-text  text-transparent">Backend</h3>
                            <ul className="grid grid-cols-3 gap-4 ">
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <PythonIcon />
                                    <span class=" text-sm w-full text-center">Python</span></li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <NodeJsIcon />
                                    <span class=" text-sm w-full text-center">NodeJS</span></li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <LaravelIcon />
                                    <span class=" text-sm w-full text-center">Laravel</span></li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <ExpressJsIcon />
                                    <span class=" text-sm w-full text-center">ExpressJS</span></li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <MySqlIcon />
                                    <span class=" text-sm w-full text-center">MySQL</span></li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <MongoDBIcon />
                                    <span class=" text-sm w-full text-center">MongoDB</span></li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <ApacheIcon />
                                    <span class=" text-sm w-full text-center">Apache</span></li>
                            </ul>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                            <h3 className="text-center mb-8 text-xl font-bold  lg:text-4xl lg:break-words bg-gradient-to-t from-purple-400 to-violet-400 dark:from-purple-400 dark:to-violet-500 bg-clip-text  text-transparent">Herramientas</h3>
                            <ul class="grid grid-cols-3 gap-4 ">
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <GitIcon />
                                    <span class=" text-sm w-full text-center">Git</span></li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <GithubIconBig />
                                    <span class=" text-sm w-full text-center">GitHub</span></li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <TerminalIcon />
                                    <span class=" text-sm w-full text-center">Terminal</span>
                                </li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <VSCodeIcon />
                                    <span class=" text-sm w-full text-center">VSCode</span>
                                </li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <NpmIcon />
                                    <span class=" text-sm w-full text-center">npm</span>
                                </li>
                                <li class=" rounded-2xl  group flex flex-col fle justify-center items-center">
                                    <WordPressIcon />
                                    <span class=" text-sm w-full text-center">WordPress</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};