import { IconType } from 'react-icons';

interface Image {
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
