import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function ToppingsFilter() {
  // Get a list of all the toppings
  const toppings = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
    }
  `);
  // Get a list of all the pizzas with their toppings
  // Count how many pizzas are in each topping
  // Loop over the first list of toppings and display the topping and the count of pizzas in that topping
  // Link it up!!
  return (
    <div>
      <p>TOPPINGS</p>
    </div>
  );
}
