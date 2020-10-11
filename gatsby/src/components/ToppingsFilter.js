import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function ToppingsFilter() {
  // Get a list of all the toppings
  // Get a list of all the pizzas with their toppings
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegetarian
        }
      }
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);
  // Count how many pizzas are in each topping
  // Loop over the first list of toppings and display the topping and the count of pizzas in that topping
  // Link it up!!
  return (
    <div>
      <p>TOPPINGS</p>
    </div>
  );
}
