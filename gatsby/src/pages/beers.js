import { graphql } from 'gatsby';
import React from 'react';

export default function BeersPage({ data }) {
  return (
    <>
      <h2 className="center">
        We have {data.beers.nodes.length} Beers Available. Dine in Only!
      </h2>
      <div>
        {data.beers.nodes.map((beer) => {
          const rating = Math.round(beer.rating.average);
          return (
            <div key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h3>{beer.name}</h3>
              {beer.price}
              <p>
                {`⭐`.repeat(rating)}
                <span style={{ filter: `grayscale(100%)` }}>
                  {`⭐`.repeat(5 - rating)}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          average
          reviews
        }
      }
    }
  }
`;
