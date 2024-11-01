'use client';

import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 left-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105
        bg-primary text-white hover:bg-primary/90"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <FaMoon className="text-xl" /> : <FaSun className="text-xl" />}
    </button>
  );
} 