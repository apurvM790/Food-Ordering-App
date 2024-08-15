# App.js created ourselves
const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"This is Namaste React 🚀"), 
        React.createElement("h2",{},"Hello from the React!"),
        React.createElement("p",{},"I am an P TAg in child1")]
),
React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"I am an H1 TAg in child2"), 
        React.createElement("h2",{},"I am an H2 TAg in child2"),
        React.createElement("p",{},"I am an P TAg in child2")]
)]
);
console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



# egnite the app
// only react not there is many other packages are need to better the application.

# npm
// npm(not a node packet manager) because it is not written anywhere and it does not have full form.
// it is the repository of package or utilities which u need

# package.json
// package.json is  configuration for npm
// our project dependent on lot of packages whoch are dependencies and npm will manage it as its version and all

// most important package is bundler which bundles all the html,js,and many files together.
// it will bundle all the files and shipped to production
// we are going to use parcel 

# packages
// two types of packages 
// one is dev dependencies => these are used for development
// one is normal dependencies => these can also be used in production 
// so we have to use parcel as a dev dependencies

# parcel
// parcel is a beast, if our app has skeleton then this parcel give it to the muscels.

# package-lock.json
//package-lock.json => it keeps track of record of all the exact version 
// sha512 - tracks record of all the version in local and when it is deployed in production 

# node modules
// node modules => contains all the code fetched from npm
// it is heavy due to transitive dependencies, 
// means we only download parcel but parcel can be dependent on other depndencies and they are on other like that. 
// we are not push node_modules in github because we can regenerate it with the help of package.json and package-lock.json files.
// its good practice to not to push those things which can be gerated. only essential things should be inside github.


// now using [npx parcel index.html] to ignite the app
// it will provide us a server host to run our app


# parcel role-
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File watching algorithm - written in c++
- caching - faster builds
- image optimization
- minification
- bundling
- compress
- diagnostic
- Error Handling
- Https
- tree shaking - remove unused code for you
- Different dev and production bundles
 

# scripts
- npm run start == npm start
- npm build != npm run build [X]


# React Component
// React Component => everything in react is component
// two types of -
// first - Class based component - OLD way of writing code
// second - Functional based component - NEW way of writing code




# first code using JSX

// React.createElement => object => HTML element(render)
// root.render(heading) so the ReactDOM takes the heading element and render inside the root 


// to overcome this clumsy code of creating elements using Core React.
// JSX (javascript syntax) [not a part of react]
// this is not HTML it is JSX 
// JSX is HTML-like or XML-like syntax


// JSX=> (Babel) => React.createElement => ReactElement-js Object => HTMLElement(render)
// at the end it has a object.
const Heading = <h1 id="heading">Namaste React using JSX🛸</h1>

// it is not pure javascript and js engine can not understand JSX
console.log(Heading);
// jsxHeading is also an object of h1 element
// JSX (transpiled before it reaches the js engine) => done by parcel or manage to do that -> (with Babel)
// Babel work to transpile the JSX code into react code.
 

// React Component => everything in react is component
// two types of -
// first - Class based component - OLD way of writing code
// second - Functional based component - NEW way of writing code


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(Heading)



# two types of export
- Named export => export const Components // like that
- default export => export default Components [function or variable name;]


=> the only problem in default you can only export one thing from the file.

=> but in named export you can export n number types of things from one file.


# two types of import:
- Named import => import { Component } from "path of file";

- default import => import Component from "path of file";


# React Hooks :
- Normal js utility functions
- Two types of hooks =: 
- useSate() - to create Superpowerfull state variable in react
- useEffect() - 


# these hooks will stick to the ui and when it changes then it will changes the ui automatically.


# when a state variable updates React will reRender the component

# Reconciliation algorithm (React Fiber)




# Monolith Architecture:
- traditional app were developed using this architecture.
- 


# Mircrosirvice Architecture
- Backend
- UI
- Authentication

it follows the single responsibility principle where each and every service has its own job.


# two approach of api calling
1- [Loads]->[API]->[Render]
            500ms(it will be blank for that time)

2- [Loads]->[Render]->[API]->[Render]
            (skeleton)
    this 2nd approach gives a better user experience.

# whenever state variable updates, react triggers a reconciliation cycle(re-renders the component).


# 2 types of Routing in Web Apps :
# -{[Single Page Application]} Client Side Routing - in this we are not making any network calls these components are already are loaded into the app and it replaces the one another. 

# <Link></Link> this will be used for routing to different paths or components.

- Server Side Routing - you make a call to the about us html page and it will come as a response.
# <a></a> this will be used for routing to different whole html page.

# higher Order Components :
- these are the same as normal components only they takes a component as input and also returns a component or modified component.

# controlled and unControlled Components :
 
#controlled - state management done by the parent component, when there is multiple childs and it maintains the state and also pass it to there childrens.

#uncontrolled - state management done by every component for there values. which they need 


# State lift up >>> ???


# Props Drilling-
 parent
    child 
        child
            child   
                child
                    child
    
if we have this type of heirarchy and we have to send data from parent to its leaf child then it goes with multiple props - which cause very burden

- to overCome this problem of props drilling something (contexts which is kind of global space where our data placed and any component can access it)


# to over come this props drilling problem we can use (CONTEXTS)
- in this the data is stored like globally object which can be accessed by any component in the app.
- for creating context we can use the createContext method from react to create the context.
- and then we can import it and use it anywhere in the app.


- in case of functional component we use (useContext) method to use the context inside any component.
- in case of class based component we can use (<contextName.consumer> tag) to use it.

# if i want to change the data of that context at the time of authentication then we can do that, by using some api call of authentication when authentication done then we get that data and we have to update our context (UserContext)

- to update it we using 
    const [userInfo, setUserInfo] = useState();

<UserContext.provider value={{loggedInUser:userInfo}}>
    in side this tag whatever we wrapped there will be our data will be reached and can be accessed
    example :
    <HeaderComponent />
    then the data only available in header component and no where else.
</UserContext.provider>

# "build": "parcel build index.html",