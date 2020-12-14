import React from 'react';
import ReactDom from 'react-dom';
//  Nested Component, React Tools
function Greeting() {
	return (
		<div className="">
			 <Person/>
			 <Message/>
			 
		</div>
	);
}

const Person = () => <h1> Akila Dilan </h1>;
const Message = () => {
return <p> this is my message</p>;
}

ReactDom.render(<Greeting />, document.getElementById('root'));
