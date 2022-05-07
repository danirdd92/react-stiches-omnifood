import type { NextPage } from 'next';
import Head from 'next/head';
import CTA from '../components/CTA';
import FeaturedIn from '../components/FeaturedIn';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Meals from '../components/Meals';
import Navigation from '../components/Navigation';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Omnifood &mdash; Never cook again!</title>
				<link rel='icon' href='img/favicon.png' />
			</Head>

			<Navigation />

			<Hero />

			<FeaturedIn />

			<HowItWorks />

			<Meals />

			<Testimonials />

			<Pricing />

			<Features />

			<CTA />

			<Footer />
		</>
	);
};

export default Home;
