import React from 'react';
import { Link } from 'gatsby';

function goToSlicemasters() {
  console.log('Let us go ho')
}

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beers">Beers</Link>
        </li>
        <li>
          <button onClick={goToSlicemasters} type="button">
            Click me to see slicemasters after 2 seconds
          </button>
        </li>
      </ul>
    </nav>
  );
}
