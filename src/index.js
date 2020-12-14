import React from 'react';
import ReactDom from 'react-dom';
//   CSS added
import './index.css';
function BookList() {
	return (
		<section className = 'booklists'>
			 <Book/>
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
		<article className = 'book'>
			{/* created separate components and they are added notedly */}
			<Image/>
			<Title/>
			<Author/>
		</article>
	)
}
const Image = () => {
	return <img src="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._AC_SX184_.jpg" alt="Amazon Book"/>
}
const Title = () => <h1>I Love You to the Moon and Back</h1>

// All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:
// Inline style (inside an HTML element)
// External and internal style sheets (in the head section)
// Browser default
// So, an inline style has the highest priority, and will override external and internal styles and browser defaults.
const Author = () => <h4 style={{color: '#617d98',marginTop:'0.25rem'}}>Amelia Hepworth, Tim Warnes</h4>
ReactDom.render(<BookList />, document.getElementById('root'));
