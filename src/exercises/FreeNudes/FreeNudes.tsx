import React from 'react';
import FreeNudesImg from "./free-nudes.png"

import "./FreeNudes.css"

interface IState {
    show: boolean,
}

class FreeNudes extends React.Component<any, IState> {
    constructor(props: {}){
        super(props)
        this.state = {
            show: false,
        }
    }

    nudesShow = () => {
        this.setState({show: true});
        setTimeout(() => {
            this.setState({show: false});
        }, 1000);
    }

    render() {
        return (
            <>
                <button id="btn" onClick={this.nudesShow}>FREE NUDES</button>
                <img
                id="img"
                src={FreeNudesImg}
                alt="Rage Meme 'NO'"
                style={{visibility: this.state.show ? "visible" : "hidden"}}
                />
            </>
        )
    }
}

export default FreeNudes;