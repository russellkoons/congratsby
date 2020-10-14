import path from 'path';

async function turnPizzasIntoPages({ graphql, actions }) {
  // Get a template for this page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
  // Query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // Loop over each and create a page for that pizza
  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      // What is the URL for this page
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

async function turnToppingsIntoPages({ graphql, actions }) {
  // Get the template
  const toppingsTemplate = path.resolve('./src/pages/pizzas.js');
  // Query all the toppings
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
        }
      }
    }
  `);
  // Create page for that topping
  data.toppings.nodes.forEach((topping) => {
    actions.createPage({
      path: `topping/${topping.name}`,
      component: toppingsTemplate,
      context: {
        topping: topping.name,
        // TODO Regex for topping
      },
    });
  });
  // Pass topping data to Pizza.js
}

export async function createPages(params) {
  // Create pages dynamically
  await Promise.all([
    // 1. Pizzas
    turnPizzasIntoPages(params),
    // 2. Toppings
    turnToppingsIntoPages(params),
  ]);
  // 3. Slicemasters
}
