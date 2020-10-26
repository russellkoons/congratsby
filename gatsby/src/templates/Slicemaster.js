import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

export default function SlicemasterPage({ data: { person } }) {
  return (
    <p>Hey</p>
  );
}

export const query = graphql`
	query($slug: String!) {
		person: sanityPerson(slug: { current: { eq: $slug } }) {
			name
			id
			description
			image {
				asset {
					fluid(maxWidth: 1000, maxHeight: 750) {
						...GatsbySanityImageFluid
					}
				}
			}
		}
	}
`;
