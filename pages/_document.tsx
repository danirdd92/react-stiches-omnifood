// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches.config';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com'></link>
					<link rel='preconnect' href='https://fonts.gstatic.com'></link>
					<link href='https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap' rel='stylesheet'></link>
					<style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
