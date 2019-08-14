import React from 'react';
import { number } from 'prop-types';

interface IProps{
    counterStart: number;
}

interface IState {
    number: number;
}



class Counter extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            number: props.counterStart,
        }
    }

    addNumberState = () => {
        this.setState({number: this.state.number + 1});
    }

    subNumberState = () => {
        this.setState({number: this.state.number - 1});
    }

    render() {
        return (
            <>
                <button onClick={this.addNumberState}> + </button>
                <div>{this.state.number}</div>
                <button onClick={this.subNumberState}>-</button>
            </>
        )
    }
}

export default Counter;