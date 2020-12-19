 import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {booksData} from './books';
import Book from './Book';

function BookList() {
	return (
		<section className='booklists'>
			{booksData.map((book, index) => {
				return <Book key={index}  {...book}></Book>
			})}
		</section>
	);
}

ReactDom.render(<BookList />, document.getElementById('root'));