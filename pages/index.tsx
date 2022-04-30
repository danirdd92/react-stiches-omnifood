import type { NextPage } from 'next';
import Head from 'next/head';
import Featured from '../components/Featured';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Meals from '../components/Meals';
import Navigation from '../components/Navigation';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Omnifood &mdash; Never cook again!</title>
				<link rel='icon' href='img/favicon.png' />
			</Head>

			<Navigation />

			<Hero />

			<Featured />

			<HowItWorks />

			<Meals />
		</>
	);
};

export default Home;
