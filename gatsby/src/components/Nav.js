import React from 'react';
import { Link } from 'gatsby';

// function goToSlicemasters() {
//   // 1. Wait for 2 seconds
//   setTimeout(() => {
//     console.log('Let us go ho');
//     // 2. Change page
//     navigate('/slicemasters');
//   }, 2000);
// }

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/slicemasters">Slicemasters</Link>
        </li>
        <li>
          <Link to="/orders">Order Ahead</Link>
        </li>
        {/* <li>
          <button onClick={goToSlicemasters} type="button">
            Click me to see slicemasters after 2 seconds
          </button>
        </li> */}
      </ul>
    </nav>
  );
}