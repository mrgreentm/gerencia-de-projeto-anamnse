// components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: 'green', padding: '10px' }}>
      <nav>
        <ul style={{ textAlign: 'center', padding: 0, margin: 0, listStyle: 'none' }}>
          <li style={{ display: 'inline', marginRight: '10px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
            Home
          </li>
          <li style={{ display: 'inline', marginRight: '10px', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
            About
          </li>
          <li style={{ display: 'inline', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
