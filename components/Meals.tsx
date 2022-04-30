import { styled } from '../stitches.config';
import { Container, Grid, Heading, List, ListItem, SubHeading } from '.';
import { dietsData, mealCardsData } from '../devData';
import MealCard from './MealCard';

const Meals = () => {
	return (
		<MealSection>
			<Container textAligment='center'>
				<SubHeading>Meals</SubHeading>

				<Heading type='secondary'> Omnifood AI chooses from 5,000+ recipes</Heading>
			</Container>

			<MealsContainer columns={3}>
				{mealCardsData.map((mealCard, index) => {
					return <MealCard key={index} {...mealCard} />;
				})}

				<Diets>
					<Heading type='tertiary'>Works with any diet:</Heading>

					<List>
						{dietsData &&
							dietsData.map((diet) => {
								return (
									<ListItem key={diet.text}>
										{
											<diet.icon
												style={{
													width: '3rem',
													height: '3rem',
													color: '#e67e22',
												}}
											/>
										}
										<span>{diet.text}</span>
									</ListItem>
								);
							})}
					</List>
				</Diets>
			</MealsContainer>
		</MealSection>
	);
};

export default Meals;

const MealSection = styled('section', {
	padding: '$96 0',
});

const MealsContainer = styled(Grid, {
	maxWidth: '$1200',
	padding: '0 $32',
	margin: '0 auto $48',
	'& div:nth-child(4n)': {
		gridRowStart: 'n',
	},
});

const Diets = styled('div', {});
