/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Container } from '.';
import { styled } from '../stitches.config';

const Featured = () => {
	return (
		<FeaturedSection>
			<Container>
				<FeaturedHeader>As featured in</FeaturedHeader>

				<Logos>
					<img src='img/logos/techcrunch.png' alt='Techcrunch logo' />
					<img src='img/logos/business-insider.png' alt='Business Insider logo' />
					<img src='img/logos/the-new-york-times.png' alt='The New York Times logo' />
					<img src='img/logos/forbes.png' alt='Forbes logo' />
					<img src='img/logos/usa-today.png' alt='USA Today logo' />
				</Logos>
			</Container>
		</FeaturedSection>
	);
};

export default Featured;

const FeaturedSection = styled('section', {
	padding: '$48 0 $32',
});

const FeaturedHeader = styled('h2', {
	fontSize: '$14',
	textTransform: 'uppercase',
	letterSpacing: '$apart',
	fontWeight: '$medium',
	textAlign: 'center',
	marginBottom: '$24',
	color: '$accent100',
});

const Logos = styled('div', {
	display: 'flex',
	justifyContent: 'space-around',
	'& img': {
		height: '$32',
		filter: 'brightness(0)',
		opacity: '50%',
	},
});
// .logos {
// .logos img {
// 	height: 3.2rem;
// 	filter: brightness(0);
// 	opacity: 50%;
// }
