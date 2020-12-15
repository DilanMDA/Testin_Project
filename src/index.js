// React props
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
// setup vars
const firstBook = {
	img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._AC_SX184_.jpg',
	title: 'I Love You to the Moon and Back',
	author: 'Amelia Hepworth, Tim Warnes',
};
const secondBook = {
	img: ' https://images-na.ssl-images-amazon.com/images/I/41tyokViuNL._AC_SX184_.jpg',
	title: 'The Very Hungry Caterpillar',
	author: 'Eric Carle',
}

function BookList() {
	return (
		<section className='booklists'>
			<Book
				img={firstBook.img}
				title={firstBook.title}
				author={firstBook.author}
			>
				<p>Props stand for "Properties." They are read-only components.
				It is an object which stores the value of attributes of a tag and work similar to the HTML attributes.
				It gives a way to pass data from one component to other components. It is similar to function arguments.
				Props are passed to the component in the same way as arguments passed in a function.</p>
				<p>Props are immutable so we cannot modify the props from inside the component. Inside the components,
				we can add attributes called props. These attributes are available in the component as this.
				props and can be used to render dynamic data in our render method.</p>
				<p>When you need immutable data in the component, you have to add props to reactDom.render() method in
				the main.js file of your ReactJS project and used it inside the component in which you need.
				It can be explained in the below example.</p>
			</Book>

			<Book
				img={secondBook.img}
				title={secondBook.title}
				author={secondBook.author} />

		</section>
	);
}
const Book = (props) => {
	const { img, title, author} = props
	return (
		<article className='book'>
			<img src={img} alt="Amazon Book" />
			<h1>{title}</h1>
			<h4>{author}</h4>
			{props.children}

		</article>
	)
}
ReactDom.render(<BookList />, document.getElementById('root'));