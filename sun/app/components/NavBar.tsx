import { ToggleTheme } from './ThemeToggle';

export const Navbar = () => (
  <nav className='absolute right-0 top-0 flex h-14 items-center justify-between px-6 text-sm font-medium'>
    <ToggleTheme />
  </nav>
);
