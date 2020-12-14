 import React from 'react';
import ReactDom from 'react-dom';
 // JSX rules
//  return single Element
// div / section / article or fragment 
// use camelCase for html attribute
// className instead of class 
// formatting
function Greeting(){
return (
    <div>
         <h1>This is function convert to arrow function</h1>
         <ul><li><a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-NU3l8of39gqI2CDzviSADnKq26L_xFjLA&usqp=CAU">hello world</a></li></ul>
    </div>
    <div></div>
)
}
ReactDom.render(<Greeting/>, document.getElementById('root'));