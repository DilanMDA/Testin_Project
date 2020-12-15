// React JSX
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
//   we don't have to hard code everything we can access JavaScript in JSX 
// JSx access via an object so we achieve to in a curly braces 
function BookList() {
	return (
		<section className='booklists'>
			<Book />

		</section>
	);
}
const author = 'Amelia Hepworth, Tim Warnes'
const Book = () => {
	const title = 'I Love You to the Moon and Back'
	return (
		<article className='book'>
			<img src="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._AC_SX184_.jpg" alt="Amazon Book" />
			<h1>{title}</h1>
			<h4>{author}</h4>
			{/* <p>{let x = 6}</p> */}
			<p>{6+6}</p>
		</article>
	)
}
ReactDom.render(<BookList />, document.getElementById('root'));
// As we have already seen that, all of the React components have a render function.
//  The render function specifies the HTML output of a React component. JSX(JavaScript Extension), 
//  is a React extension which allows writing JavaScript code that looks like HTML. In other words, 
//  JSX is an HTML-like syntax used by React that extends ECMAScript so that HTML-like syntax can 
//  co-exist with JavaScript/React code. The syntax is used by preprocessors (i.e., transpilers like babel)
//  to transform HTML-like syntax into standard JavaScript objects that a JavaScript engine will parse.

// JSX provides you to write HTML/XML-like structures (e.g., DOM-like tree structures) in the same file 
// where you write JavaScript code, then preprocessor will transform these expressions into actual JavaScript code. 
// Just like XML/HTML, JSX tags have a tag name, attributes, and children.