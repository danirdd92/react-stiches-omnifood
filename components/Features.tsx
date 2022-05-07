import { Grid, InfiniteIcon, LeafIcon, NutritionIcon, PauseIcon } from '.';
import { styled } from '../stitches.config';
import { featureData } from '../devData';
import { Feature } from '../types';

const Features = () => {
	return (
		<FeaturesContainer columns={4}>
			{featureData.map((feature) => {
				return <FeatureItem key={feature.title} feature={feature} />;
			})}
		</FeaturesContainer>
	);
};

export default Features;

const FeaturesContainer = styled(Grid, {
	maxWidth: '$1200',
	padding: '0 $32',
	margin: '0 auto',
});

const FeatureTitle = styled('p', {
	fontSize: '$24',
	color: '$accent500',
	fontWeight: '$bold',
	marginBottom: '$16',
});

const FeatureText = styled('p', {
	fontSize: '$18',
	lineheight: '$large',
});

const FeatureItem = ({ feature }: { feature: Feature }) => {
	const { title, text, icon } = feature;

	const renderIcon = (icon: string) => {
		const iconContainerStyle = {
			backgroundColor: '#fdf2e9',
			marginBottom: '3.2rem',
			padding: '1.6rem',
			width: 'fit-content',
			borderRadius: '50%',
		};

		switch (icon) {
			case 'infinite':
				return (
					<div style={iconContainerStyle}>
						<InfiniteIcon />
					</div>
				);
			case 'nutrition':
				return (
					<div style={iconContainerStyle}>
						<NutritionIcon />
					</div>
				);
			case 'leaf':
				return (
					<div style={iconContainerStyle}>
						<LeafIcon />
					</div>
				);
			case 'pause':
				return (
					<div style={iconContainerStyle}>
						<PauseIcon />
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div>
			{renderIcon(icon)}
			<FeatureTitle>{title}</FeatureTitle>
			<FeatureText>{text}</FeatureText>
		</div>
	);
};
