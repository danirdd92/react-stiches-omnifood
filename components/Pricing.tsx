import { Container, Grid, Heading, SubHeading } from '.';
import { styled } from '../stitches.config';
import PricingPlans from './PricingPlans';

const Pricing = () => {
	return (
		<>
			<PricingSection>
				<Container>
					<SubHeading>Pricing</SubHeading>

					<Heading type='secondary'>Eating well without breaking the bank</Heading>
				</Container>

				<PlanContainer columns={2}>
					<PricingPlans />
				</PlanContainer>
			</PricingSection>

			<DetailsContainer>
				<PlanDetails>Prices include all applicable taxes. You can cancel at any time. Both plans include the following:</PlanDetails>
			</DetailsContainer>
		</>
	);
};

export default Pricing;

const PricingSection = styled('section', {
	padding: '$96 0',
});

const PlanContainer = styled(Grid, {
	maxWidth: '$1200',
	padding: '0 $32',
	margin: '0 auto',
	marginBottom: '$48 !important',
});

const DetailsContainer = styled(PlanContainer, {});

const PlanDetails = styled('aside', {
	fontSize: '$16',
	lineHeight: '$paragraph',
	textAlign: 'center',
});
