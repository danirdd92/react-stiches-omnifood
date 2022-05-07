import { createStitches, globalCss } from '@stitches/react';

export const { styled, css, theme, getCssText } = createStitches({
	theme: {
		colors: {
			primary: '#e67e22',

			tint100: '#eb984e',
			tint200: '#fae5d3',
			tint300: '#fdf2e9',

			shade100: '#cf711f',
			shade200: '#45260a',

			accent100: '#888',
			accent200: '#767676',
			accent300: '#6f6f6f',
			accent400: '#555',
			accent500: '#333',
		},
		space: {
			2: '0.2rem',
			4: '0.4rem',
			8: '0.8rem',
			12: '1.2rem',
			16: '1.6rem',
			24: '2.4rem',
			32: '3.2rem',
			48: '4.8rem',
			64: '6.4rem',
			80: '8rem',
			96: '9.6rem',
			128: '12.8rem',
		},
		fontSizes: {
			10: '1rem',
			12: '1.2rem',
			14: '1.4rem',
			16: '1.6rem',
			18: '1.8rem',
			20: '2rem',
			24: '2.4rem',
			30: '3rem',
			36: '3.6rem',
			44: '4.4rem',
			52: '5.2rem',
			62: '6.2rem',
			74: '7.4rem',
			86: '8.6rem',
			98: '9.8rem',
		},
		fontWeights: {
			default: 400,
			medium: 500,
			semiBold: 600,
			bold: 700,
		},
		lineHeights: {
			default: 1,
			small: 1.05,
			medium: 1.2,
			paragraph: 1.6,
			large: 1.8,
		},
		letterSpacings: {
			close: '-0.5px',
			apart: '0.75px',
		},
		sizes: {
			22: '2.22rem',
			30: '3.0rem',
			32: '3.2rem',
			48: '4.8rem',
			64: '6.4rem',
			96: '9.6rem',
			1200: '120rem',
		},
		radii: {
			default: '9px',
			medium: '11px',
			tag: '100px',
			round: '50%',
		},
		shadows: {
			outline: '0 0 0 0.8rem rgba(230, 125, 34, 0.5)',
		},
	},
	media: {},
});

export const globalStyles = globalCss({
	'*': {
		padding: 0,
		margin: 0,
		boxSizing: 'border-box',
	},

	html: {
		fontSize: '62.5%',
		overflowX: 'hidden',
	},
	body: {
		fontFamily: 'Rubik, sans-serif',
		lineHeight: 1,
		fontWeight: 400,
		color: '#555',
		overflowX: 'hidden',
	},
	strong: {
		fontWeight: 500,
	},
	'*:focus': {
		outline: 'none',
		boxShadow: '0 0 0 0.6rem rgba(230, 125, 34, 0.5)',
	},
	'.feature-icon': {
		color: '#e67e22',
		width: '3.2rem',
		height: '3.2rem',
		backgroundColor: '#fdf2e9',
		marginBottom: '3.2rem',
		padding: '1.6rem',
		borderRadius: '50%',
	},
});
