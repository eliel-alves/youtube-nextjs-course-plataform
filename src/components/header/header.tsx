'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, GraduationCap, LayoutGrid, Menu, Youtube } from 'lucide-react';
import ThemeSwitch from './theme-switch';

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    setShowDrawer(false);
  }, [currentPath]);

  const handleToggleDrawer = (drawer: boolean) => {
    setShowDrawer(!drawer);
  };

  return (
    <header className="flex w-full justify-center border-b border-zinc-200 bg-gray-100 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="container flex items-center justify-between p-3 md:px-4 md:py-3">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold md:text-lg"
        >
          <Youtube
            size={24}
            className="box-content rounded-lg bg-primary p-1 text-white md:p-2"
          />
          YouCourse
        </Link>
        <nav className="flex items-center gap-2">
          <button
            onClick={() => handleToggleDrawer(showDrawer)}
            className="flex rounded-full p-3 transition-colors hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-800 dark:active:bg-zinc-700 md:hidden"
          >
            <Menu size={20} />
          </button>
          <ul
            data-open={showDrawer}
            className="fixed inset-0 flex w-60 flex-col gap-2 border-r border-zinc-200 bg-background p-3 text-sm transition-transform data-[open=false]:-translate-x-full dark:border-zinc-800 md:relative md:flex md:w-full md:flex-row md:border-0 md:bg-transparent md:p-0 md:data-[open=false]:-translate-x-0"
          >
            <Link
              href="/"
              className="mb-6 mt-4 flex items-center justify-center gap-3 self-center text-lg font-semibold md:hidden"
            >
              <Youtube
                size={24}
                className="box-content rounded-lg bg-primary p-2 text-white"
              />
              YouCourse
            </Link>
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
          </ul>
          <div className="mx-1 h-6 border-l border-zinc-200 dark:border-zinc-800 md:mx-3"></div>
          <ThemeSwitch />
        </nav>
      </div>
    </header>
  );
};

export default Header;
