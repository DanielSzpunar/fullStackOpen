import React from 'react';
import ReactDOM from 'react-dom';

//Helper Functions: Guess the year of the birth of the person being greeted.
    
const Hello = ({name, age}) => {
    //Lets streamline our component by assigning values of the properties:
    /*
    const name = props.name
    const age = props.age
    */

    //Lets also utilize the bornYear function:
    /*
    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - age
    }
    */

    //Or take it even further and use es6 destructoring:
    //const { name , age } = props
    //Or we assign the values of the properties directly to variables by destructuring the props object that is passed to the component function as a parameter: 

    //bornYear() can now be:
    const bornYear = () => new Date().getFullYear() - age
    //Remember we can skip the {} but if use the {} we must include a return.
    return (
        <div>
            <p>Hello {name}, you are {age} years old.</p>
    <p>So you were likely born in the year {bornYear()}</p>
        </div>
    ) 
}
const App = () => {
    const name = 'Peter'
    const age = 10
    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10} />
            <Hello name={name} age={age} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
