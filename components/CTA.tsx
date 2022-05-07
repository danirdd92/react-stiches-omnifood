import { Container, Heading, Button } from '.';
import { styled } from '../stitches.config';

const CTA = () => {
	return (
		<CtaSection id='cta'>
			<Container>
				<CallToAction>
					<CtaTextBox>
						<Heading type='secondary'>Get your first meal for free!</Heading>
						<CtaText>
							Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!
						</CtaText>

						<CtaForm name='sign-up'>
							<div>
								<label htmlFor='full-name'>Full Name</label>
								<input id='full-name' type='text' placeholder='John Smith' name='full-name' required />
							</div>

							<div>
								<label htmlFor='email'>Email address</label>
								<input id='email' type='email' placeholder='me@example.com' name='email' required />
							</div>

							<div>
								<label htmlFor='select-where'>Where did you hear from us?</label>
								<select id='select-where' name='select-where' required>
									<option value=''>Please choose one option:</option>
									<option value='friends'>Friends and family</option>
									<option value='youtube'>YouTube video</option>
									<option value='podcast'>Podcast</option>
									<option value='ad'>Facebook ad</option>
									<option value='others'>Others</option>
								</select>
							</div>

							<Button variant='form'>Sign up now</Button>
						</CtaForm>
					</CtaTextBox>
					<CtaImageBox />
				</CallToAction>
			</Container>
		</CtaSection>
	);
};

export default CTA;

const CtaSection = styled('section', {
	padding: '$48 0 $128',
});

const CallToAction = styled('div', {
	display: 'grid',
	gridTemplateColumns: '2fr 1fr',
	boxShadow: '0 2.4rem 4.8rem rgba(0, 0, 0, 0.15)',
	borderRadius: '$medium',
	backgroundImage: 'linear-gradient(to right bottom, #eb984e, #e67e22)',
	'& *:focus': {
		outline: 'none',
		boxShadow: '0 0 0 0.8rem rgba(253, 242, 233, 0.5)',
	},

	[`& ${Heading}`]: {
		color: 'inherit',
		marginBottom: '$32',
	},
});

const CtaTextBox = styled('div', {
	padding: '$48 $64 $64',
	color: '$shade200',
});

const CtaText = styled('p', {
	fontSize: '$18',
	lineHeight: '$large',
	marginBottom: '$48',
});

const CtaForm = styled('form', {
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	columnGap: '$32',
	rowGap: '$24',
	'& label': {
		display: 'block',
		fontSize: '$16',
		fontWeight: '$medium',
		marginBottom: '$12',
	},

	'& input, & select': {
		width: '100%',
		padding: '$12',
		fontSize: '$18',
		fontFamily: 'inherit',
		color: 'inherit',
		border: 'none',
		bordercolor: '$tint300',
		borderRadius: '$default',
		boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
	},

	'& input::placeholder': {
		color: '#aaa',
	},
});

const CtaImageBox = styled('div', {
	backgroundImage: "linear-gradient(to right bottom, rgba(235, 151, 78, 0.35), rgba(230, 125, 34, 0.35)), url('img/eating.jpg')",
	backgroundSize: 'cover',
	backgroundPosition: 'center',
});
