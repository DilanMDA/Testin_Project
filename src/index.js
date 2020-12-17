// React props
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
// Object Array list display via wrapping a map method
const Books = [
	{
		id: 1,
		img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._AC_SX184_.jpg',
		title: 'I Love You to the Moon and Back',
		author: 'Amelia Hepworth, Tim Warnes',
	},
	{
		id: 2,
		img: ' https://images-na.ssl-images-amazon.com/images/I/41tyokViuNL._AC_SX184_.jpg',
		title: 'The Very Hungry Caterpillar',
		author: 'Eric Carle',
	},
	{
		id: 3,
		img: ' https://images-na.ssl-images-amazon.com/images/I/51X8sCVdbmL._AC_SX184_.jpg',
		title: 'Stuff You Should Know',
		author: 'Josh Clark, Chuck Bryant',
	}
];
// const names = ['akila','dilan', 'saman'];
// const newNames = names.map((name) =>{
// return <h1>{name}</h1>
// });
// console.log(newNames);
function BookList() {
	return (
		<section className='booklists'>
			{/* index is change as the array changing 
			so better way to added via an id bcz that is the unique */}
			{Books.map((book,index) => {
				//  const {img, title, author} = book;
				return <Book key = {index}  {...book}></Book>
				// another way of passing props in this way ... means pass the all properties 
			})}
		</section>
	);
}
const Book = ({img, title, author }) => {
	// const { img, title, author } = props
	return (
		<article className='book'>
			<img src={img} alt="Amazon Book" />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	)
}
ReactDom.render(<BookList />, document.getElementById('root'));