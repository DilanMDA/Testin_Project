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
			{/* this prop name is job and value 'developer' */}
			<Book title = 'random title' number = '26'/>
			{/* this prop name is random  and value 'random title' */}
		</section>
	);
}
const Book = (props) => {
	console.log(props);
	// accessing this props when we rendering above component prop name and in value
	return (
		<article className='book'>
			<img src= {img} alt="Amazon Book" />
			<h1>{title}</h1>
			<h4>{author}</h4>
			{/* pass the value of props via object and display that as JSX */}
			<p>{props.job}</p>
			<p>{props.title}</p>
			<p>{props.number}</p>
		</article>
	)
}
ReactDom.render(<BookList />, document.getElementById('root'));