import React from 'react';

export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h2>{type.title}</h2>
      <p>{type.description}</p>
    </div>
  );
}
