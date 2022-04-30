import { MealCardItem } from '../types';
import {
	IoFlameOutline,
	IoRestaurantOutline,
	IoStarOutline,
	IoCheckmarkOutline,
	IoCloseOutline,
	IoInfiniteOutline,
	IoNutritionOutline,
	IoLeafOutline,
	IoPauseOutline,
	IoLogoInstagram,
	IoLogoFacebook,
	IoLogoTwitter,
	IoMenuOutline,
} from 'react-icons/io5';
export const mealStepData = [
	{
		stepNumber: '01',
		title: 'Tell us what you like (and what not)',
		description: `Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!`,
		image: {
			src: 'img/app/app-screen-1.png',
			alt: 'iPhone app preferences selection screen',
		},
	},

	{
		stepNumber: '02',
		title: 'Receive meals at convenient time',
		description: `Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.`,
		image: {
			src: 'img/app/app-screen-2.png',
			alt: 'iPhone app meal approving plan screen',
		},
	},

	{
		stepNumber: '03',
		title: 'Receive meals at convenient time',
		description: `Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!`,
		image: {
			src: 'img/app/app-screen-3.png',
			alt: 'iPhone app delivery screen',
		},
	},
];

export const mealCardsData: MealCardItem[] = [
	{
		title: 'Japanese Gyozas',
		tags: ['Vegetarian'],
		image: {
			src: 'img/meals/meal-1.jpg',
			alt: 'Japanese Gyozas',
		},
		attributes: [
			{
				text: '650 calories',
				icon: IoFlameOutline,
			},
			{
				text: 'NutriScore ® 74',
				icon: IoRestaurantOutline,
			},
			{
				text: '4.9 rating (537)',
				icon: IoStarOutline,
			},
		],
	},
	{
		title: 'Avocado Salad',
		tags: ['Vegan', 'Paleo'],
		image: {
			src: 'img/meals/meal-2.jpg',
			alt: 'Avocado Salad',
		},
		attributes: [
			{
				text: '400 calories',
				icon: IoFlameOutline,
			},
			{
				text: 'NutriScore ® 92',
				icon: IoRestaurantOutline,
			},
			{
				text: '4.8 rating (441)',
				icon: IoStarOutline,
			},
		],
	},
];

export const dietsData = [
	{
		icon: IoCheckmarkOutline,
		text: 'Vegetarian',
	},
	{
		icon: IoCheckmarkOutline,
		text: 'Vegan',
	},
	{
		icon: IoCheckmarkOutline,
		text: 'Pescatarian',
	},
	{
		icon: IoCheckmarkOutline,
		text: 'Gluten-free',
	},
	{
		icon: IoCheckmarkOutline,
		text: 'Lactose-free',
	},
	{
		icon: IoCheckmarkOutline,
		text: 'Keto',
	},
	{
		icon: IoCheckmarkOutline,
		text: 'Paleo',
	},
	{
		icon: IoCheckmarkOutline,
		text: 'Low FODMAP',
	},
	{
		icon: IoCheckmarkOutline,
		text: 'Kid-friendly',
	},
];
