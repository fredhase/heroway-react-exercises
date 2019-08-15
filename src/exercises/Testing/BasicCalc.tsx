import React from 'react';

interface IState {
    no1: number,
    no2: number,
    result: any,
    input1: string,
    input2: string,
    error1: string;
}

class BasicCalc extends React.Component<any, IState> {
    constructor(props: {}){
        super(props)

        this.state = {
            no1: 0,
            no2: 0,
            result: 0,
            input1: '',
            input2: '',
            error1: '',
        }
    }

    add = () => {
        let no1 = Number(this.state.input1);
        let no2 = Number(this.state.input2);
        this.setState({result: no1 + no2});
    }

    sub = () => {
        let no1 = Number(this.state.input1);
        let no2 = Number(this.state.input2);
        this.setState({result: no1 - no2});
    }

    mul = () => {
        let no1 = Number(this.state.input1);
        let no2 = Number(this.state.input2);
        this.setState({result: no1 * no2});
    }

    div = () => {
        let no1 = Number(this.state.input1);
        let no2 = Number(this.state.input2);
        if(no2 === 0){
            this.setState({result: 'Cant divide by zero!'});
        } else {
            this.setState({result: no1 / no2});
        }
    }

    input1Handler = (x: any) => {
        this.setState({input1: x.target.value})
    }

    input2Handler = (x: any) => {
        this.setState({input2: x.target.value})
    }

    render(){
        return (
            <>
                <span>Input numbers and select operation</span>
                <input type="text" onChange={this.input1Handler} style={{margin: '10px'}}/>
                <input type="text" onChange={this.input2Handler} style={{margin: '10px'}}/>
                <span style={{margin: '10px'}}>Result:</span>
                <span style={{margin: '10px'}}>{this.state.result}</span>
                <button onClick={this.add} style={{display: "inline", margin: '10px'}}> + </button>
                <button onClick={this.sub} style={{display: "inline", margin: '10px'}}> - </button>
                <button onClick={this.mul} style={{display: "inline", margin: '10px'}}> * </button>
                <button onClick={this.div} style={{display: "inline", margin: '10px'}}> / </button>
            </>
        )
    }
}

export default BasicCalc;