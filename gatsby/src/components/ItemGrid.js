import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

export default function ItemGrid({ items }) {
  console.log(items);
  return (
    <ItemsGrid>
      {items.map((item) => {
        <ItemStyles>
          <p>
            <span className="mark">{item.name}</span>
          </p>
        </ItemStyles>
      })}
    </ItemsGrid>
  )
}
