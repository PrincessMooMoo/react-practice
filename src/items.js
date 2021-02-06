import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Items extends React.Component {
    // constructor(props){
    //     super(props);

        // const items = [{
        //     id: 1,
        //     name: 'one'
        //   },
        //   {
        //     id: 2,
        //     name: '2'
        //   }];
        
    // }
    constructor(props) {
        super(props);
    
        const people = [
            {firstName: 'Wendy',
            lastName: 'Chrisco'
        },
            {firstName: 'Michael',
            lastName: 'Chrisco'}
        ];
    
        this.state = { people };
    }
    
    render() {
        return (<div>
        {this.state.people.map((person) => (
            <p>Hello, {person.firstName} {person.lastName} from {person.country}!</p>
        ))}
        </div>);
    }
}

export default Items;