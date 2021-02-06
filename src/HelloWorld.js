import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Hello extends React.Component {
    render() {
        return(
            <div>
                Hello
            </div>
        );
    }
}

class World extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: "Wendy",
        };
    }
    render() {
        const { name } = this.state;
        return(
            <div>
                World {name}
            </div>
        )
    }
}

export { Hello, World };