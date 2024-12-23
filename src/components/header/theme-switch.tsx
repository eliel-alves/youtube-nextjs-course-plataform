'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleSwitchTheme = () => {
    resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <button
      className="rounded-full p-3 transition-colors ease-in hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-800 dark:active:bg-zinc-700"
      onClick={() => handleSwitchTheme()}
    >
      {resolvedTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeSwitch;
