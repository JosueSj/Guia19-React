import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to= "/Main1">Main1</Link>
        </li>
        <li>
          <Link to= "/Main2">Main2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;