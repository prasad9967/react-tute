// import React from "react"
// import ReactDOM from "react-dom/client"


// styles = {
//     color: 'red',
//     fontSize: '16px',
//     marginTop: '1px'
// }

const heading = React.createElement("h1", {id: 'heading'}, "Hello World from React!")
// here heading is a react element. It is not a HTML tag.

const parent = React.createElement('div',{id:'parent'},[
    React.createElement('div',{id: 'child1'},[
        React.createElement('h1',{},'Hi iam h1 tag'),
        React.createElement('h2',{},'Hi iam h2 tag')
    ])
],[
    React.createElement('div',{id: 'child2'},[
        React.createElement('h1',{},'Hi iam h1 tag'),
        React.createElement('h2',{},'Hi iam h2 tag')
    ])
])


// JSX

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)