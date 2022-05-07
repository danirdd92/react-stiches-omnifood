import { IoCheckmarkOutline, IoCloseOutline } from 'react-icons/io5';
import { List, ListItem, Button } from '.';
import { styled } from '../stitches.config';

import React from 'react';

const PricingPlans = () => {
	return (
		<>
			<StarterPlan />

			<CompletePlan />
		</>
	);
};

export default PricingPlans;

const Plan = styled('div', {
	borderRadius: '$medium',
	width: '75%',

	variants: {
		type: {
			started: {
				justifySelf: 'end',
				border: '2px solid $tint300',
				padding: '4.6rem',
			},
			complete: {
				backgroundColor: '$tint300',
				padding: '$48',
				position: 'relative',
				overflow: 'hidden',

				'&::after': {
					content: 'Best Value',
					position: 'absolute',
					top: '6%',
					right: '-18%',
					textTransform: 'uppercase',
					fontSize: '$14',
					fontWeight: '$bold',
					color: '$accent500',
					backgroundColor: '#ffd43b',
					padding: '$8 $80',
					transform: 'rotate(45deg)',
				},
			},
		},
	},
});

const PlanHeader = styled('header', {
	textalign: 'center',
	marginBottom: '$48',
});

const PlanName = styled('p', {
	color: '$shade100',
	fontWeight: '$semiBold',
	fontSize: '$20',
	textTransform: 'uppercase',
	letterSpacing: '$apart',
	marginBottom: '$32',
});

const PlanPrice = styled('p', {
	fontSize: '$62',
	fontWeight: '$semiBold',
	color: '$accent500',
	marginBottom: '$16',

	'& span': {
		fontSize: '$30',
		fontWeight: '$medium',
		marginRight: '$8',
	},
});

const PlanText = styled('p', {
	fontSize: '$16',
	lineHeight: '$paragraph',
	color: '$accent200',
});

const PlanSignUp = styled('div', {
	textAlign: 'center',
	marginTop: '$48',
});

const StarterPlan = () => {
	return (
		<Plan type='started'>
			<PlanHeader>
				<PlanName>Starter</PlanName>

				<PlanPrice>
					<span>$</span>399
				</PlanPrice>

				<PlanText>per month. That&apos;s just $13 per meal!</PlanText>
			</PlanHeader>

			<List>
				<ListItem>
					<CheckMark />
					<span>1 meal per day</span>
				</ListItem>

				<ListItem>
					<CheckMark />
					<span>Order from 11am to 9pm</span>
				</ListItem>

				<ListItem>
					<CheckMark />
					<span>Delivery is free</span>
				</ListItem>

				<ListItem>
					<CloseMark />
				</ListItem>
			</List>

			<PlanSignUp>
				<Button as='a' href='#' variant='filled'>
					Start eating well
				</Button>
			</PlanSignUp>
		</Plan>
	);
};

const CompletePlan = () => {
	return (
		<Plan type='complete'>
			<PlanHeader>
				<PlanName>Complete</PlanName>

				<PlanPrice>
					<span>$</span>649
				</PlanPrice>

				<PlanText>per month. That&apos;s just $11 per meal!</PlanText>
			</PlanHeader>

			<List>
				<ListItem>
					<CheckMark />
					<span>
						<strong>2 meals</strong> per day
					</span>
				</ListItem>

				<ListItem>
					<CheckMark />
					<span>
						Order <strong>24/7</strong>
					</span>
				</ListItem>

				<ListItem>
					<CheckMark />
					<span>Delivery is free</span>
				</ListItem>

				<ListItem>
					<CheckMark />
					<span>Get access to latest recipes</span>
				</ListItem>
			</List>

			<PlanSignUp>
				<Button as='a' href='#' variant='filled'>
					Start eating well
				</Button>
			</PlanSignUp>
		</Plan>
	);
};

const CheckMark = () => {
	return (
		<IoCheckmarkOutline
			style={{
				color: '#e67e22',
				height: '3rem',
				width: '3rem',
			}}
		/>
	);
};

const CloseMark = () => {
	return (
		<IoCloseOutline
			style={{
				color: '#e67e22',
				height: '3rem',
				width: '3rem',
			}}
		/>
	);
};
