// React props
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
// setup vars
const author = 'Amelia Hepworth, Tim Warnes'
const title = 'I Love You to the Moon and Back'
const img = 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._AC_SX184_.jpg'
function BookList() {
	return (
		<section className='booklists'>
			<Book job = 'developer'/>
			<Book />
		</section>
	);
}
const Book = (props) => {
	console.log(props);
	return (
		<article className='book'>
			<img src= {img} alt="Amazon Book" />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	)
}
ReactDom.render(<BookList />, document.getElementById('root'));
 // we created the props object and pass the value of the object
