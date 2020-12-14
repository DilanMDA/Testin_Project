//  create first component 
// start the make component normally we need to import react and javascript function
// index.js is javascript entry point and we need to add additional code.
import React from 'react';
// if create function we initialize this function starting the capitalize letter in this case react knows  this is the function.
import ReactDom from 'react-dom';
// we return to JSX and we must convert that HTML so we import ReactDom and its render JSX into HTML  
function Greeting(){
return <h4>This is Akila and Tis is my first component</h4>
}
// render method looking for two thing first one is what is going to render and second thing is where we want to render which is identify root id 
ReactDom.render(<Greeting/>, document.getElementById('root'));