import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement => object => HTML element(render)
// root.render(heading) so the ReactDOM takes the heading element and render inside the root 


// to overcome this clumsy code of creating elements using Core React.
// JSX (javascript syntax) [not a part of react]
// this is not HTML it is JSX 
// JSX is HTML-like or XML-like syntax


// JSX=> (Babel) => React.createElement => ReactElement-js Object => HTMLElement(render)
// at the end it has a object.

// react element
const Title = function () {
return <h1 id="heading">Namaste React using JSX🛸</h1>
}
const elem = <span>React Element </span>

// const title = <h1 id="heading">{elem} Namaste React using JSX🛸  </h1>

// it is not pure javascript and js engine can not understand JSX
// console.log(heading);
// jsxHeading is also an object of h1 element
// JSX (transpiled before it reaches the js engine) => done by parcel or manage to do that -> (with Babel)
// Babel work to transpile the JSX code into react code.
 

// React Component => everything in react is component
// two types of -
// first - Class based component - OLD way of writing code
// second - Functional based component - NEW way of writing code


// React Functional Component -> just A normal javascript function
// function which returns Jsx component known as React Functional Component

const number = 1000;

// component composition
const HeadingComponent = () => {
    return  (<div id="container">
            {Title()}
            <h2>{number*29}</h2> {/*byt this way we can use react element inside JSX.*/}

            {/* <Title/> */}
                <h1>Namaste React Functional Component (●'◡'●)</h1>
            {/* <Title/> */}
            </div>)
            
}
// in this case it will go in infinite loop so that browser freezes.
// const title = <h1 id="heading">{elem} Namaste React using JSX🛸 <HeadingComponent/> </h1>

// Babel is doing all these things in it.

// const HeadingComponent2 = () => <h1 className="">Namaste React Functional Component</h1>;
console.log(HeadingComponent);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>)