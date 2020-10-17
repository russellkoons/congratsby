import { graphql, Link } from 'gatsby';
import React from 'react';

export default function SlicemastersPage({ data }) {
  const slicemasters = data.slicemasters.nodes;
  return (
    <>
      <div>
        {slicemasters.map((person) => (
          <div>
            <Link to={`slicemaster/${person.slug.current}`}>
              <span className="mark">{person.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export const query = graphql`
  query {
    slicemasters: allSanityPerson {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
