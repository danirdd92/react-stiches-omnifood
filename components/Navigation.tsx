import { styled } from '../stitches.config';

const Navigation = () => {
	return (
		<Header>
			<a href='#'>
				<Logo alt='Omnifood logo' src='img/omnifood-logo.png' />
			</a>

			<Nav>
				<NavList>
					<NavItem href='#how' text='How it works' />
					<NavItem href='#meals' text='Meals' />
					<NavItem href='#testimonials' text='Testimonials' />
					<NavItem href='#pricing' text='Pricing' />
					<NavItem type='cta' href='#cta' text='Try for free' />
				</NavList>
			</Nav>
		</Header>
	);
};

export default Navigation;

const Header = styled('header', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	backgroundColor: '$tint300',
	height: '$96',
	padding: '0 $48',
	position: 'relative',
});

const Logo = styled('img', {
	height: '$22',
});

const Nav = styled('nav', {
	display: 'flex',
	alignItems: 'center',
	listStyle: 'none',
	gap: '$48',
});

const NavList = styled('ul', {
	display: 'flex',
	listStyle: 'none',
	alignItems: 'center',
	gap: '$48',
});

const _NavItem = styled('a', {
	'&:link, &:visited': {
		display: 'inline-block',
		textDecoration: 'none',
		color: '$accent300',
		fontWeight: '$medium',
		fontSize: '$18',
	},
	'&:hover, &:active': {
		color: '$shade100',
	},

	variants: {
		type: {
			cta: {
				'&:link, &:visited': {
					padding: '$16 $24',
					color: '#fff',
					backgroundColor: '$primary',
				},
				'&:hover, &:active': {
					color: '$shade100',
				},
			},
		},
	},
});

const NavItem = ({ text, href, type }: { text: string; href: string; type?: 'cta' }) => {
	return (
		<li>
			<_NavItem type={type} href={href}>
				{text}
			</_NavItem>
		</li>
	);
};
