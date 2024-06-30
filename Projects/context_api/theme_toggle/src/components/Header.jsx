import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>Theme Switcher</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;