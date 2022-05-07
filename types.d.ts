import { IconType } from 'react-icons';

export interface Image {
	src: string;
	alt: string;
}
interface Attribute {
	text: string;
	icon: IconType;
}

export interface MealCardItem {
	title: string;
	image: Image;
	tags: string[];
	attributes: Attribute[];
}

export interface TestimonialData {
	author: string;
	quote: string;
	image: Image;
}

export interface Feature {
	title: string;
	text: string;
	icon: string;
}
