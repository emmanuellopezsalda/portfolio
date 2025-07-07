import { useState, useEffect } from 'react';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full z-50">
            <div className="max-w-6xl mx-auto px-4 py-4">
                <nav className="flex items-center justify-center">
                    <ul className={`hidden md:flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-300 border ${
                        scrolled 
                            ? 'bg-purple-900/80 backdrop-blur-md shadow-lg border-purple-500/20' 
                            : 'bg-transparent border-transparent shadow-none'
                    }`}>
                        <li>
                            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                                Proyectos
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
                                Experiencia
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                                Sobre mi    
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                                Tecnologias
                            </a>
                        </li>
                    </ul>
                                    
                    <button className={`md:hidden p-2 text-gray-400 hover:text-white rounded-full transition-all duration-300 border ${
                        scrolled 
                            ? 'bg-purple-900/80 backdrop-blur-md border-purple-500/20' 
                            : 'bg-transparent border-transparent'
                    }`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    );
}