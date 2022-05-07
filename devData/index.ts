import { Feature, MealCardItem, TestimonialData } from '../types';
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

export const testimonialData: TestimonialData[] = [
	{
		author: 'Dave Bryson',
		quote: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
		image: {
			src: 'img/customers/dave.jpg',
			alt: 'Photo of customer Dave Bryson',
		},
	},
	{
		author: 'Ben Hadley',
		quote: "The AI algorithm is crazy good, it chooses the right meals for  me every time. It's amazing not to worry about food anymore!",
		image: {
			src: 'img/customers/ben.jpg',
			alt: 'Photo of customer Ben Hadley',
		},
	},
	{
		author: 'Steve Miller',
		quote: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
		image: {
			src: 'img/customers/steve.jpg',
			alt: 'Photo of customer Steve Miller',
		},
	},
	{
		author: 'Hannah Smith',
		quote: 'I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.',
		image: {
			src: 'img/customers/hannah.jpg',
			alt: 'Photo of customer Hannah Smith',
		},
	},
];

export const galleryImages = [
	{
		src: 'img/gallery/gallery-1.jpg',
		alt: 'Photo of beautifully arranged food',
	},
	{
		src: 'img/gallery/gallery-2.jpg',
		alt: 'Photo of beautifully arranged food',
	},
	{
		src: 'img/gallery/gallery-3.jpg',
		alt: 'Photo of beautifully arranged food',
	},
	{
		src: 'img/gallery/gallery-4.jpg',
		alt: 'Photo of beautifully arranged food',
	},
	{
		src: 'img/gallery/gallery-5.jpg',
		alt: 'Photo of beautifully arranged food',
	},
	{
		src: 'img/gallery/gallery-6.jpg',
		alt: 'Photo of beautifully arranged food',
	},
	{
		src: 'img/gallery/gallery-7.jpg',
		alt: 'Photo of beautifully arranged food',
	},
	{
		src: 'img/gallery/gallery-8.jpg',
		alt: 'Photo of beautifully arranged food',
	},
	{
		src: 'img/gallery/gallery-9.jpg',
		alt: 'Photo of beautifully arranged food',
	},
	{
		src: 'img/gallery/gallery-10.jpg',
		alt: 'Photo of beautifully arranged food',
	},
	{
		src: 'img/gallery/gallery-11.jpg',
		alt: 'Photo of beautifully arranged food',
	},
	{
		src: 'img/gallery/gallery-12.jpg',
		alt: 'Photo of beautifully arranged food',
	},
];

export const featureData: Feature[] = [
	{
		title: 'Never cook again',
		text: 'Our subscriptions cover 365 days per year, even including major holidays.',
		icon: 'infinite',
	},
	{
		title: 'Local and organic',
		text: 'Our cooks only use local, fresh, and organic products to prepare your meals.',
		icon: 'nutrition',
	},
	{
		title: 'No waste',
		text: 'All our partners only use reusable containers to package all your meals.',
		icon: 'leaf',
	},
	{
		title: 'Pause anytime',
		text: 'Going on vacation? Just pause your subscription, and we refund unused days.',
		icon: 'pause',
	},
];
