// React props
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
// setup vars
const firstBook = {
	img : 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._AC_SX184_.jpg',
	title : 'I Love You to the Moon and Back',
	author : 'Amelia Hepworth, Tim Warnes',
};
const secondBook = {
	img : ' https://images-na.ssl-images-amazon.com/images/I/41tyokViuNL._AC_SX184_.jpg',
	title : 'The Very Hungry Caterpillar',
	author : 'Eric Carle',
}
 
function BookList() {
	return (
		<section className='booklists'>
			<Book
			img = {firstBook.img}
			title = {firstBook.title}
			author = {firstBook.author}/>
			<Book
			img = {secondBook.img}
			title = {secondBook.title}
			author = {secondBook.author}/>
			 
		</section>
	);
}
const Book = (props) => {
	console.log(props);
		return (
		<article className='book'>
			<img src={props.img} alt="Amazon Book" />
			<h1>{props.title}</h1>
			<h4>{props.author}</h4>
		</article>
	)
}
ReactDom.render(<BookList />, document.getElementById('root'));