import { Container, Grid, Heading, SubHeading } from '.';
import { mealStepData } from '../devData';
import { styled } from '../stitches.config';
import MealStep from './MealStep';

const HowItWorks = () => {
	return (
		<HowItWorksSection>
			<Container css={{ textAlign: 'center' }}>
				<SubHeading>How it works</SubHeading>

				<Heading type='secondary'>Your daily dose of health in 3 simple steps</Heading>
			</Container>

			<MealStepsContainer columns='2' vertical='center'>
				{mealStepData.map((mealStep) => {
					return <MealStep key={mealStep.stepNumber} {...mealStep} />;
				})}
			</MealStepsContainer>
		</HowItWorksSection>
	);
};

export default HowItWorks;

const HowItWorksSection = styled('section', {
	padding: '$96 0',
});

const MealStepsContainer = styled(Grid, {
	maxWidth: '$1200',
	padding: '0 $32',
	margin: '0 auto $48',
	'& div:nth-child(4n)': {
		gridRowStart: 'n',
	},
});
