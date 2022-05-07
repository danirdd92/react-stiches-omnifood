import { Button, Heading } from '.';
import { styled } from '../stitches.config';

const Hero = () => {
	return (
		<Section>
			<HeroLayout>
				<HeroTextColumn>
					<Heading type='primary'>A healthy meal delivered to your door, every single day</Heading>

					<Description>
						The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.
					</Description>

					<Button
						as='a'
						variant='filled'
						href='#cta'
						css={{
							marginRight: '$16 !important',
						}}>
						Start eating well
					</Button>
					<Button as='a' variant='outlined' href='#how'>
						Learn more &darr;
					</Button>

					<DeliveredMeals>
						<CustomerImages>
							<img src='img/customers/customer-1.jpg' alt='Customer photo' />
							<img src='img/customers/customer-2.jpg' alt='Customer photo' />
							<img src='img/customers/customer-3.jpg' alt='Customer photo' />
							<img src='img/customers/customer-4.jpg' alt='Customer photo' />
							<img src='img/customers/customer-5.jpg' alt='Customer photo' />
							<img src='img/customers/customer-6.jpg' alt='Customer photo' />
						</CustomerImages>

						<DeliveredText>
							<span>250,000+</span> meals delivered last year!
						</DeliveredText>
					</DeliveredMeals>
				</HeroTextColumn>

				<HeroImageColumn>
					<picture>
						<source srcSet='img/hero.webp' type='image/webp' />
						<source srcSet='img/hero-min.png' type='image/png' />

						<img src='img/hero-min.png' alt='Woman enjoying food, meals in storage container, and food bowls on a table' />
					</picture>
				</HeroImageColumn>
			</HeroLayout>
		</Section>
	);
};

export default Hero;

const Section = styled('section', {
	backgroundColor: '$tint300',
	padding: '$48 0 $96',
});

const HeroLayout = styled('div', {
	maxWidth: '130rem',
	margin: '0 auto',
	padding: '0 $32',

	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	alignItems: 'center',
	gap: '$96',
});

const HeroTextColumn = styled('div', {});

const HeroImageColumn = styled('div', {
	'& img': {
		width: '100%',
	},
});

const Description = styled('p', {
	fontSize: '$20',
	lineheight: '$paragraph',
	marginBottom: '$48',
});

const DeliveredMeals = styled('div', {
	display: 'flex',
	alignItems: 'center',
	gap: '$16',
	marginTop: '$80',
});
const CustomerImages = styled('div', {
	display: 'flex',

	'& img': {
		height: '$48',
		width: '$48',
		borderRadius: '$round',
		marginRight: '-1.6rem',
		border: '3px solid $tint300',
	},
});

const DeliveredText = styled('p', {
	fontSize: '$18',
	fontWeight: '$semiBold',
	marginLeft: '$16',
	'& span': {
		color: '$shade100',
		fontWeight: '$bold',
	},
});
