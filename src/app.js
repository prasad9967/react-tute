import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import RestaurantCard from "./components/RestaurantCard"


// styles = {
//     color: 'red',
//     fontSize: '16px',
//     marginTop: '1px'
// }

// const heading = React.createElement("h1", {id: 'heading'}, "Hello World from React!")
// // here heading is a react element. It is not an HTML tag.

// const parent = React.createElement('div',{id:'parent'},[
//     React.createElement('div',{id: 'child1'},[
//         React.createElement('h1',{},'Hi iam heading 1 tag'),
//         React.createElement('h2',{},'Hi iam h2 tag')
//     ])
// ],[
//     React.createElement('div',{id: 'child2'},[
//         React.createElement('h1',{},'Hi iam h1 tag'),
//         React.createElement('h2',{},'Hi iam h2 tag')
//     ])
// ])





// It is not a convenient way


// JSX -HTML like syntax 
// It is transpiled before it reaches the JS Engine. This is done by Babel
// JSX => React.createElement => ReactElement-JS Object => HTML Element(render)
const jsx = <h1 id="first">Hello there! </h1>

const Component = () => (
    <>
        <h3>Component</h3>
    </>
)

// React Component
const  FirstComponent = ({name}) => (
        <>
        <h1>Hello From {name}</h1>
        {123+123}
        <Component />
        {Component()}
        </>
    )



    // Application Creation
    const Body = () => {
        return (
            <>
                <div className="body">
                    <div className="filter">
                        <button className="filter-btn" onClick={()=>{
                            
                        }}>
                            Top Rated Restaurant</button>
                    </div>
                    <div className="res-container">
                        <RestaurantCard name='Meghana Foods'/>
                        <RestaurantCard name='KFC'/>
                        <RestaurantCard name='Meghamala'/>
                    </div>
                </div>
            </>
        )
    }

    const AppLayout = () => {
        return (
            <div className="app">
                <Header />
                <Body />
            </div>
        )
    }


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)

