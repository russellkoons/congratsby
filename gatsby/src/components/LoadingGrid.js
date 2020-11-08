import React from 'react';
import { ItemsGrid, ItemStyles } from "../styles/Grids";

export default function LoadingGrid({ count }) {
  return (
    <ItemsGrid>
      {Array.from({ length: count }, (_, i) => (
        <ItemStyles>
          <p className="mark">Loading...</p>
          <img
            src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII="
            className="Loading"
            alt="Loading"
            width="500"
            height="400"
          />
        </ItemStyles>
      ))}
    </ItemsGrid>
  );
}