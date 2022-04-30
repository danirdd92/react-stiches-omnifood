/* eslint-disable @next/next/no-img-element */

import { styled } from '../stitches.config';
import { MealCardItem } from '../types';

const MealCard = ({ attributes, image, tags, title }: MealCardItem) => {
	return (
		<Meal>
			<MealImage {...image} />
			<MealContent>
				<TagsContainer>
					{tags &&
						tags.map((tag) => {
							return (
								//@ts-ignore
								<Tag key={tag} foodType={tag.toLowerCase()}>
									{tag}
								</Tag>
							);
						})}
				</TagsContainer>

				<MealTitle>{title}</MealTitle>

				<AttributesList>
					{attributes &&
						attributes.map((attribute, index) => {
							return (
								<Attribute key={index}>
									<>
										{
											<attribute.icon
												style={{
													width: '2.4rem',
													height: '2.4rem',
													color: '#e67e22',
												}}
											/>
										}
										<span>{attribute.text}</span>
									</>
								</Attribute>
							);
						})}
				</AttributesList>
			</MealContent>
		</Meal>
	);
};

export default MealCard;

const Meal = styled('div', {
	boxShadow: '0 2.4rem 4.8rem rgba(0, 0, 0, 0.075)',
	borderRadius: '$medium',
	overflow: 'hidden',
	transition: 'all 0.4s',
	'&:hover': {
		transform: ' translateY(-1.2rem)',
		boxShadow: '0 3.2rem 6.4rem rgba(0, 0, 0, 0.06)',
	},
});

const MealImage = styled('img', {
	width: '100%',
});

const MealContent = styled('div', {
	padding: '$32 $48 $48 $48',
});

const TagsContainer = styled('div', {
	marginBottom: '1.2rem',
	display: 'flex',
	gap: '$4',
});

const Tag = styled('span', {
	display: 'inline-block',
	padding: '$4 $8',
	fontSize: '$12',
	textTransform: 'uppercase',
	color: '$accent500',
	borderRadius: '$tag',
	fontWeight: '$semiBold',
	variants: {
		foodType: {
			vegetarian: {
				backgroundColor: '#51cf66',
			},
			vegan: {
				backgroundColor: '#94d82d',
			},
			paleo: {
				backgroundColor: '#ffd43b',
			},
		},
	},
});

const MealTitle = styled('p', {
	fontSize: '$24',
	color: '$accent500',
	fontWeight: '$semiBold',
	marginBottom: '$32',
});

const AttributesList = styled('ul', {
	listStyle: 'none',
	display: 'flex',
	flexDirection: 'column',
	gap: '2rem',
});

const Attribute = styled('li', {
	fontSize: '$18',
	display: 'flex',
	alignItems: 'center',
	gap: '$16',
});

const MealIcon = styled('svg', {
	height: '$24',
	width: '$24',
	color: '$primary',
});
