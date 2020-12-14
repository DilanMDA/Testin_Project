import React from 'react';
import ReactDom from 'react-dom';
//  Nested Component, React Tools
function BookList() {
	return (
		<section>
			 <Book/>
			 <Book/>
			 <Book/>
			 <Book/>
			 <Book/>
			 <Book/>
			 <Book/>
			 <Book/>
			 
		</section>
	);
}
const Book = () => {
	return (
		<article>
			{/* created separate components and they are added notedly */}
			<Image/>
			<Title/>
			<Author/>
		</article>
	)
}
const Image = () => {
	return <img src="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._AC_SX184_.jpg" alt="Amzon Book"/>
}
const Title = () => <h1>I Love You to the Moon and Back</h1>
const Author = () => <h4>Amelia Hepworth, Tim Warnes</h4>
ReactDom.render(<BookList />, document.getElementById('root'));
