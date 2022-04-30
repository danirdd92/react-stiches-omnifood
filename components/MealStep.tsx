import { Heading } from '.';
import { styled } from '../stitches.config';

interface MealStepProps {
	stepNumber: string;
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
}

const MealStep = ({ stepNumber, title, description, image }: MealStepProps) => {
	return (
		<>
			<StepTextBox>
				<StepNumber>{stepNumber}</StepNumber>

				<Heading type='tertiary'>{title}</Heading>

				<StepDescription>{description}</StepDescription>
			</StepTextBox>

			<StepImageBox>
				<StepImage src={image.src} alt={image.alt} />
			</StepImageBox>
		</>
	);
};

export default MealStep;

const StepTextBox = styled('div', {});

const StepNumber = styled('p', {
	fontSize: '$86',
	fontWeight: '$semiBold',
	color: '#ddd',
	marginBottom: '1.2rem',
});

const StepDescription = styled('p', {
	fontSize: '$18',
	lineHeight: '$large',
});
const StepImageBox = styled('div', {
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	'&:before, &:after': {
		content: '',
		display: 'block',
		borderRadius: '$round',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
	},
	'&:before': {
		width: '60%',
		paddingBottom: '60%',
		backgroundColor: '$tint300',
		zIndex: '-2',
	},
	'&:after': {
		width: '45%',
		paddingBottom: '45%',
		backgroundColor: '$tint200',
		zIndex: '-1',
	},
});

const StepImage = styled('img', {
	width: '35%',
});
