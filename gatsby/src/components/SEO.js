import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO({ children, location, description, title, image }) {
	const { site } = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					twitter
				}
			}
		}
	`);
	return (
		<Helmet titleTemplate={`%s - `}>
			<html lang="en" />

		</Helmet>
	);
}
