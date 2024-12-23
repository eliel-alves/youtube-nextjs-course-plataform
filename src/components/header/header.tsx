'use client';

import Link from 'next/link';
import { Github, GraduationCap, LayoutGrid, Youtube } from 'lucide-react';
import ThemeSwitch from './theme-switch';
import { usePathname } from 'next/navigation';

const Header = () => {
  const currentPath = usePathname();

  return (
    <header className="flex w-full justify-center border-b border-zinc-200 bg-gray-100 dark:border-zinc-800 dark:bg-zinc-900">
      <nav className="container flex items-center justify-between p-3">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold"
        >
          <Youtube
            size={24}
            className="box-content rounded-md bg-primary p-2 text-white"
          />
          YouCourse Platform
        </Link>
        <ul className="flex items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              data-active={currentPath === '/'}
              className={
                currentPath === '/' ? 'menu-button--active' : 'menu-button'
              }
            >
              <LayoutGrid size={16} />
              Página Inicial
            </Link>
          </li>
          <li>
            <Link
              href="/courses"
              className={
                currentPath === '/courses'
                  ? 'menu-button--active'
                  : 'menu-button'
              }
            >
              <GraduationCap size={16} />
              Cursos
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/eliel-alves/youtube-nextjs-course-plataform"
              target="_blank"
              className="menu-button"
            >
              <Github size={16} />
              Github
            </Link>
          </li>
          <li className="mx-3 h-6 border-l border-zinc-200 dark:border-zinc-800"></li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
