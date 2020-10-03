import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  margin-bottom: 3rem;

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
  }

  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: 2.5deg;
    }
  }
`;

// Function for moving between pages without using Link
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
    <NavStyles>
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
    </NavStyles>
  );
}
