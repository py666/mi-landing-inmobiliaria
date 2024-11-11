'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

interface BreadcrumbsProps {
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

export default function Breadcrumbs({ dict }: BreadcrumbsProps) {
    const pathname = usePathname();
    const currentSection = pathname.split('#')[1] || 'home';

    const sections = {
        'home': dict.nav.home,
        'gallery': dict.nav.gallery,
        'features': dict.nav.features,
        'location': dict.nav.location,
        'video': dict.nav.video,
        'contact': dict.nav.contact
    };

    return (
        <nav aria-label="Breadcrumb" className="bg-primary-dark/50 py-2 px-4 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-secondary-green">
                <Link href="/" className="hover:text-light-green transition-colors">
                    {dict.nav.home}
                </Link>
                <FaChevronRight size={12} />
                <span className="text-light-green">
                    {sections[currentSection as keyof typeof sections]}
                </span>
            </div>
        </nav>
    );
} 