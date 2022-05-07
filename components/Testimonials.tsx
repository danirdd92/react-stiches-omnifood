import { Heading, SubHeading } from '.';
import { styled } from '../stitches.config';
import { testimonialData } from '../devData';
import { galleryImages } from '../devData';

const Testimonials = () => {
	return (
		<TestimonialsSection>
			<TestimonialsContainer>
				<SubHeading>Testimonials</SubHeading>

				<Heading type='secondary'>Once you try it, you can&apos;t go back</Heading>

				<TestimonialsList>
					{testimonialData.map((testimonial, index) => {
						return (
							<Testimonial key={index}>
								<TestimonialImage {...testimonial.image} />

								<TestimonialQuote>{testimonial.quote}</TestimonialQuote>

								<TestimonialAuthor>&mdash; {testimonial.author}</TestimonialAuthor>
							</Testimonial>
						);
					})}
				</TestimonialsList>
			</TestimonialsContainer>

			<Gallery>
				{galleryImages.map((image, index) => {
					return <GalleryItem key={index} image={image} />;
				})}
			</Gallery>
		</TestimonialsSection>
	);
};

export default Testimonials;

const TestimonialsSection = styled('section', {
	backgroundColor: '$tint300',
	display: 'grid',
	gridTemplateColumns: '55fr 45fr',
	alignItems: 'center',
});

const TestimonialsContainer = styled('div', {
	padding: '$96',
});

const TestimonialsList = styled('div', {
	display: 'grid',
	gridTemplateColumns: 'repeat(2, 1fr)',
	rowGap: '$48',
	columnGap: '$80',
});

const Testimonial = styled('figure', {});

const TestimonialImage = styled('img', {
	width: '$64',
	borderRadius: '$round',
	marginBottom: '$12',
});

const TestimonialQuote = styled('blockquote', {
	fontSize: '$18',
	lineHeight: '$large',
	marginBottom: '$16',
});

const TestimonialAuthor = styled('p', {
	fontSize: '$16',
	color: '$accent300',
});

const Gallery = styled('div', {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gap: '$16',
	padding: '$16',
});

const GalleryImage = styled('figure', {
	overflow: 'hidden',
	'& img': {
		display: 'block',
		width: '100%',
		transition: 'all 0.4s',
	},
	'& img:hover': {
		transform: 'scale(1.1)',
	},
});

const GalleryItem = ({
	image,
}: {
	image: {
		src: string;
		alt: string;
	};
}) => {
	return (
		<GalleryImage>
			<img src={image.src} alt={image.alt} />
		</GalleryImage>
	);
};
