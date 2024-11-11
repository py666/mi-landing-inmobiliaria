'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface ImageZoomProps {
    src: string;
    alt: string;
    onClose: () => void;
}

export default function ImageZoom({ src, alt, onClose }: ImageZoomProps) {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        const newScale = scale + (e.deltaY > 0 ? -0.1 : 0.1);
        setScale(Math.min(Math.max(1, newScale), 3));
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
                onClick={onClose}
            >
                <button
                    className="absolute top-4 right-4 text-white hover:text-secondary-green transition-colors"
                    onClick={onClose}
                >
                    <FaTimes size={24} />
                </button>

                <motion.div
                    className="relative w-full h-full"
                    onWheel={handleWheel}
                    drag={scale > 1}
                    dragConstraints={{
                        left: -100 * (scale - 1),
                        right: 100 * (scale - 1),
                        top: -100 * (scale - 1),
                        bottom: 100 * (scale - 1)
                    }}
                    dragElastic={0.1}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                    style={{
                        cursor: scale > 1 ? 'grab' : 'default'
                    }}
                >
                    <motion.div
                        className="absolute inset-0"
                        animate={{
                            scale,
                            x: position.x,
                            y: position.y
                        }}
                    >
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            className="object-contain"
                            quality={100}
                            onClick={(e: React.MouseEvent) => {
                                if (!isDragging) {
                                    e.stopPropagation();
                                    setScale(scale === 1 ? 2 : 1);
                                    setPosition({ x: 0, y: 0 });
                                }
                            }}
                        />
                    </motion.div>
                </motion.div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                    Usa la rueda del mouse para hacer zoom o haz click para alternar entre zoom
                </div>
            </motion.div>
        </AnimatePresence>
    );
} 