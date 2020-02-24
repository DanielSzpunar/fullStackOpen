import React from 'react';
import ReactDOM from 'react-dom';

// const Hello = (props) => {
//     return (
//         <div>
//             <p>Hello {props.name}, you are {props.age}</p>
//         </div>
//     )
// }
// const App = () => {
//     console.log("Hello from the component.")
//     const now = new Date()
//     const name = 'Daniel' 
//     const age = 37
//     /*Above the return we can create functions and variables:  */
//     return (
//         <div>
//             <p>Hello world, it is now {now.toString()}</p>
//             <Hello name={name} age={age} />
//         </div>
//     )
// }
const Header = (props) => {
    return (
        <>
        <h1>{props.course}</h1>
        </>
    )
}
const Content = (props) => {
    return (
    <>
        <p>{props.part} {props.exercise}</p>
    </>
    )
}
const Total = (props) => {
    return (
        <>
            <p>Number of exercises: {props.total}</p>
        </>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    return (
        <>
            <Header course={course}/>
            <Content part={part1} exercise={exercises1} />
            <Content part={part2} exercise={exercises2}/>
            <Content part={part3} exercise={exercises3}/>
            <Total total={exercises1 + exercises2 + exercises3} />
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))