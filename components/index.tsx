import { styled } from '../stitches.config';

export const Container = styled('div', {
	maxWidth: '$1200',
	padding: '0 $32',
	margin: '0 auto',
});

export const Grid = styled('div', {
	display: 'grid',
	columnGap: '$64',
	rowGap: '$96',
	'&:not(:last-child)': {
		marginBottom: '$96',
	},
	variants: {
		columns: {
			1: {
				gridTemplateColumns: '1fr',
			},
			2: {
				gridTemplateColumns: 'repeat(2, 1fr)',
			},
			3: {
				gridTemplateColumns: 'repeat(3, 1fr)',
			},
			4: {
				gridTemplateColumns: 'repeat(4, 1fr)',
			},
		},
		vertical: {
			center: {
				justifyContent: 'center',
			},
		},
	},
});

export const List = styled('ul', {
	listStyle: 'none',
	display: 'flex',
	flexDirection: 'column',
	gap: '$16',
});

export const ListItem = styled('li', {
	fontSize: '$18',
	display: 'flex',
	alignItems: 'center',
	gap: '$16',
	lineHeight: '$medium',
});

// need to check
export const ListIcon = styled('svg', {
	width: '$30',
	height: '$30',
	color: '$primary',
});

export const Link = styled('a', {
	'&:link, &:visited': {
		display: 'inline-block',
		color: '$primary',
		textDecoration: 'none',
		borderBottom: '1px solid currentColor',
		paddingBottom: '2px',
	},
	'&:hover, &:active': {
		color: '$shade100',
		borderBottom: '1px solid transparent',
	},
});

export const ButtonBase = styled('button', {
	'&:link, &:visited': {
		display: 'inline-block',
		textDecoration: 'none',
		fontSize: '$20',
		fontWeight: '$semiBold',
		padding: '$16 $32',
		borderRadius: '$default',
	},
});

export const Button = styled(ButtonBase, {
	variants: {
		variant: {
			filled: {
				'&:link, &:visited': {
					backgroundColor: '$primary',
					color: '#fff',
				},
				'&:hover, &:active': {
					backgroundColor: '$shade100',
				},
			},
			outlined: {
				'&:link, &:visited': {
					borderBlockColor: '#fff',
					color: '$accent400',
				},
				'&:hover, &:active': {
					backgroundColor: '$tint300',
					boxShadow: 'inset 0 0 0 3px #fff',
				},
			},
			form: {
				backgroundColor: '$shade200',
				color: '$tint300',
				alignSelf: 'end',
				padding: '1.2rem',

				'&:hover': {
					backgroundColor: '#fff',
					color: '$accent400',
				},
			},
		},
	},
});

export const Heading = styled('h1', {
	fontWeight: '$bold',
	color: '$accent500',
	letterSpacing: '$close',
	variants: {
		type: {
			primary: {
				fontSize: '$52',
				lineHeight: '$small',
				marginBottom: '$32',
			},
			secondary: {
				fontSize: '$44',
				lineHeight: '$medium',
				marginBottom: '$96',
			},
			tertiary: {
				fontSize: '$30',
				lineHeight: '$medium',
				marginBottom: '$32',
			},
		},
	},
});

export const SubHeading = styled('span', {
	display: 'block',
	fontSize: '$16',
	fontWeight: '$medium',
	color: '$shade100',
	textTransform: 'uppercase',
	marginBottom: '$16',
	letterSpacing: '$apart',
});
