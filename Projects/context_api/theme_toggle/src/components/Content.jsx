import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === 'light' ? '#f0f0f0' : '#555', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
      <p>This is some content in the {theme} theme.</p>
    </div>
  );
};

export default Content;