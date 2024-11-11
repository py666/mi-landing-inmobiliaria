'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { i18n } from '@/i18n-config';

interface NavBarProps {
    dict: {
        nav: {
            home: string;
            gallery: string;
            features: string;
            location: string;
            video: string;
            contact: string;
        };
    };
}

export default function NavBar({ dict }: NavBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [currentUrl, setCurrentUrl] = useState('');
    const pathname = usePathname();
    const currentLang = pathname.split('/')[1];

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    if (!dict?.nav) {
        return null;
    }

    const navItems = [
        { id: 'home-section', label: dict.nav.home },
        { id: 'features-section', label: dict.nav.features },
        { id: 'gallery-section', label: dict.nav.gallery },
        { id: 'location-section', label: dict.nav.location },
        { id: 'video-section', label: dict.nav.video },
        { id: 'contact-section', label: dict.nav.contact }
    ];

    const changeLanguage = (newLang: string) => {
        const currentPath = pathname.split('/').slice(2).join('/');
        window.location.href = `/${newLang}/${currentPath}`;
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = 64;
            const sectionTop = section.offsetTop - navbarHeight;
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
            setIsOpen(false);
            setActiveSection(sectionId);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                'home-section',
                'features-section',
                'gallery-section',
                'location-section',
                'video-section',
                'contact-section'
            ];

            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(currentUrl)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/90 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link href={`/${currentLang}`} className="text-light-green font-bold text-xl">
                        Inicio
                    </Link>

                    {/* Menú de escritorio */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm font-medium transition-colors hover:text-light-green
                                    ${activeSection === item.id ? 'text-light-green' : 'text-secondary-green'}`}
                            >
                                {item.label}
                            </button>
                        ))}

                        {/* Selector de idioma */}
                        <div className="flex items-center space-x-2">
                            {i18n.locales.map((locale) => (
                                <button
                                    key={locale}
                                    onClick={() => changeLanguage(locale)}
                                    className={`px-2 py-1 rounded-md transition-colors
                                        ${currentLang === locale
                                            ? 'bg-secondary-green text-primary-dark'
                                            : 'text-secondary-green hover:text-light-green'}`}
                                >
                                    {locale.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Botón de menú móvil */}
                    <div className="md:hidden flex items-center space-x-4">
                        {/* Selector de idioma móvil */}
                        <div className="flex items-center space-x-2">
                            {i18n.locales.map((locale) => (
                                <button
                                    key={locale}
                                    onClick={() => changeLanguage(locale)}
                                    className={`px-2 py-1 rounded-md text-sm transition-colors
                                        ${currentLang === locale
                                            ? 'bg-secondary-green text-primary-dark'
                                            : 'text-secondary-green hover:text-light-green'}`}
                                >
                                    {locale.toUpperCase()}
                                </button>
                            ))}
                        </div>

                        <button
                            className="text-secondary-green hover:text-light-green"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>

                    {/* Botones de compartir */}
                    <div className="hidden md:flex items-center space-x-4 ml-4">
                        <a
                            href={shareLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary-green hover:text-light-green transition-colors"
                        >
                            <FaFacebook size={20} />
                        </a>
                        <a
                            href={shareLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary-green hover:text-light-green transition-colors"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            href={shareLinks.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary-green hover:text-light-green transition-colors"
                        >
                            <FaWhatsapp size={20} />
                        </a>
                        <a
                            href={shareLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary-green hover:text-light-green transition-colors"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Menú móvil */}
                {isOpen && (
                    <div className="md:hidden py-4">
                        <div className="flex flex-col space-y-4">
                            {navItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-sm font-medium transition-colors hover:text-light-green
                                        ${activeSection === item.id ? 'text-light-green' : 'text-secondary-green'}`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
