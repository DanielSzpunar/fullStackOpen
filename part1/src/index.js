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
    // const course = 'Half Stack application development'
    // const part1 = 'Fundamentals of React'
    // const exercises1 = 10
    // const part2 = 'Using props to pass data'
    // const exercises2 = 7
    // const part3 = 'State of a component'
    // const exercises3 = 14
    const course = 'Half Stack Application Development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a Component',
            exercises: 14
        }
    ]

    return (
        <>
            <Header course={course}/>
            <Content part={parts[0].name} exercise={parts[0].exercises} />
            <Content part={parts[1].name} exercise={parts[1].exercises}/>
            <Content part={parts[2].name} exercise={parts[2].exercises}/>
            <Total total={parts[0].exercises + parts[0].exercises + parts[2].exercises} />
        </>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))