import { FacebookIcon, Grid, InstagramIcon, TwitterIcon } from '.';
import { styled } from '../stitches.config';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<FooterSection>
			<Grid type='footer'>
				<LogoColumn>
					<FooterLogo href='#'>
						<img src={'img/omnifood-logo.png'} alt='Omnifood logo' />
					</FooterLogo>

					<SocialLinks>
						<SocialLink icon='instagram' />
						<SocialLink icon='facebook' />
						<SocialLink icon='twitter' />
					</SocialLinks>

					<Copyright>Copyright &copy; {year} by Omnifood, Inc. All rights reserved.</Copyright>
				</LogoColumn>

				<AddressColumn>
					<FooterHeading>Contact us</FooterHeading>
					<Contacts>
						<Address>623 Harrison St., 2nd Floor, San Francisco, CA 94107</Address>

						<p>
							<FooterLink href='tel:415-201-6370'>415-201-6370</FooterLink>
							<br />
							<FooterLink href='mailto:hello@omnifood.com'>hello@omnifood.com</FooterLink>
						</p>
					</Contacts>
				</AddressColumn>

				<NavColumn>
					<FooterHeading>Account</FooterHeading>
					<FooterNav>
						<FooterNavItem text='Create account' />
						<FooterNavItem text='Sign in' />
						<FooterNavItem text='iOS app' />
						<FooterNavItem text='Android app' />
					</FooterNav>
				</NavColumn>

				<NavColumn>
					<FooterHeading>Company</FooterHeading>
					<FooterNav>
						<FooterNavItem text='About Omnifood' />
						<FooterNavItem text='For Business' />
						<FooterNavItem text='Cooking partners' />
						<FooterNavItem text='Careers' />
					</FooterNav>
				</NavColumn>

				<NavColumn>
					<FooterHeading>Resources</FooterHeading>
					<FooterNav>
						<FooterNavItem text='Recipe directory' />
						<FooterNavItem text='Help center' />
						<FooterNavItem text='Privacy & terms' />
					</FooterNav>
				</NavColumn>
			</Grid>
		</FooterSection>
	);
};

export default Footer;

const FooterSection = styled('footer', {
	padding: '$128 0',
	borderTop: '1px solid #eee',
});

const LogoColumn = styled('div', {
	display: 'flex',
	flexDirection: 'column',
});

const FooterLogo = styled('a', {
	display: 'block',
	marginBottom: '$32',
	'& img': {
		height: '$22',
	},
});

const FooterLink = styled('a', {
	'&, &:link, &:visited': {
		textDecoration: 'none',
		fontSize: '$16',
		color: '$accent200',
		transition: 'all 0.3s',
	},
	'&, &:hover, &:active': {
		color: '$accent400',
	},
});

const SocialLinks = styled('ul', {
	listStyle: 'none',
	display: 'flex',
	gap: '$24',
});

const _SocialLink = styled('li', {
	'& a:link, & a:visited': {
		textDecoration: 'none',
		fontSize: '$16',
		color: '$accent200',
		transition: 'all 0.3s',
	},
	'& a:hover, & a:active': {
		color: '$accent400',
	},
});

const SocialLink = ({ icon }: { icon: 'facebook' | 'twitter' | 'instagram' }) => {
	const renderIcon = () => {
		switch (icon) {
			case 'facebook':
				return <FacebookIcon />;
			case 'twitter':
				return <TwitterIcon />;
			case 'instagram':
				return <InstagramIcon />;
		}
	};
	return (
		<_SocialLink>
			<a href='#'>{renderIcon()}</a>
		</_SocialLink>
	);
};

const Copyright = styled('p', {
	fontSize: '$14',
	lineHeight: '$paragraph',
	color: '$accent300',
	marginTop: 'auto',
});

const AddressColumn = styled('div', {});

const FooterHeading = styled('p', {
	fontSize: '$18',
	fontWeight: '$medium',
	marginBottom: '4rem',
});

const Contacts = styled('address', {
	fontStyle: 'normal',
	fontSize: '$16',
	lineHeight: '$paragraph',
});

const Address = styled('p', {
	marginBottom: '$24',
});

const NavColumn = styled('div', {});

const FooterNav = styled('ul', {
	listStyle: 'none',
	display: 'flex',
	flexDirection: 'column',
	gap: '$24',
});

const FooterNavItem = ({ text }: { text: string }) => {
	return (
		<li>
			<FooterLink href='#'>{text}</FooterLink>
		</li>
	);
};
