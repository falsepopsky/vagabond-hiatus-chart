'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [description, SetDescription] = useState<string>();

  function handleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    function handleDescription() {
      SetDescription(theme === 'light' ? 'Light mode enabled' : 'Dark mode enabled');
    }

    if (!mounted) {
      setMounted(true);
      handleDescription();
    } else {
      handleDescription();
    }
  }, [mounted, theme]);

  return (
    <button
      className='flex h-6 w-6 items-center justify-center rounded-md hover:bg-zinc-900/5 focus-visible:outline focus-visible:outline-1 focus-visible:outline-teal-500 active:outline active:outline-1 active:outline-teal-600 dark:hover:bg-white/5'
      type='button'
      onClick={handleTheme}
      title='Toggle light & dark color scheme'
      aria-label='Toggle light & dark theme'
      aria-live='polite'>
      <svg
        className='hidden h-4 w-4 dark:block'
        viewBox='0 0 32 32'
        fill='currentColor'
        aria-hidden='true'
        width={16}
        height={16}>
        <path d='M13.5025,5.4136A15.0755,15.0755,0,0,0,25.096,23.6082a11.1134,11.1134,0,0,1-7.9749,3.3893c-.1385,0-.2782.0051-.4178,0A11.0944,11.0944,0,0,1,13.5025,5.4136M14.98,3a1.0024,1.0024,0,0,0-.1746.0156A13.0959,13.0959,0,0,0,16.63,28.9973c.1641.006.3282,0,.4909,0a13.0724,13.0724,0,0,0,10.702-5.5556,1.0094,1.0094,0,0,0-.7833-1.5644A13.08,13.08,0,0,1,15.8892,4.38,1.0149,1.0149,0,0,0,14.98,3Z' />
      </svg>
      <svg
        className='h-4 w-4 dark:hidden'
        viewBox='0 0 32 32'
        fill='currentColor'
        aria-hidden='true'
        width={16}
        height={16}>
        <rect x='15' y='2' width='2' height='5' />
        <rect x='21.6675' y='6.8536' width='4.958' height='1.9998' transform='translate(1.5191 19.3744) rotate(-45)' />
        <rect x='25' y='15' width='5' height='2' />
        <rect
          x='23.1466'
          y='21.6675'
          width='1.9998'
          height='4.958'
          transform='translate(-10.0018 24.1465) rotate(-45)'
        />
        <rect x='15' y='25' width='2' height='5' />
        <rect
          x='5.3745'
          y='23.1466'
          width='4.958'
          height='1.9998'
          transform='translate(-14.7739 12.6256) rotate(-45)'
        />
        <rect x='2' y='15' width='5' height='2' />
        <rect x='6.8536' y='5.3745' width='1.9998' height='4.958' transform='translate(-3.253 7.8535) rotate(-45)' />
        <path d='M16,12a4,4,0,1,1-4,4,4.0045,4.0045,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z' />
      </svg>
      {mounted && <span className='sr-only'>{description}</span>}
    </button>
  );
}
