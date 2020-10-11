import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

function countPizzasInTopping(pizzas) {
  // Return the pizzas with counts
  return pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // Check if this an existing topping
      const existingTopping = acc[topping.id];
      if (existingTopping) {
        // If it is, increment by 1
        existingTopping.count += 1;
      }
      // Otherwise create a new entry in our acc and set it to one
      acc[topping.id] = {
        id: topping.id,
        name: topping.name,
        count: 1,
      };
      return acc;
    }, {});
}

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
  const toppingsWithCounts = countPizzasInTopping(pizzas.nodes);
  // Loop over the first list of toppings and display the topping and the count of pizzas in that topping
  // Link it up!!
  return (
    <div>
      <p>TOPPINGS</p>
    </div>
  );
}
