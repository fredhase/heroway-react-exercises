import React from 'react';

interface IProps {
    deafultLiked: boolean;
}

interface IState {
    liked: boolean;
}

/**
 * FUNÇÕES PADRÕES - render / componentDidMount / etc.
 * PROPRIEDADES PADRÕES - this.props / this.state;
 * this.props ===> SOMENTE LEITURA
 * this.state ===> DECLARA, LÊ E MODIFICA
 */

//Transformando uma classe comum em componente react
class ToggleLike extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            liked: props.deafultLiked,
        }
    }
    
    componentDidMount() {
        console.log('COMPONENTE ACABOU DE SER MONTADO');
    }

    changeLikedState = () => {
        //Abordagem imperativa
        //this.state.liked = true;

        this.setState({ liked: this.state.liked ? false : true});
    }
    


    render() {  //é algo interno do react. função reservada e executada automaticamente.
                //Ela funciona para renderizar na tela.
        console.log('COMPONENTE ESTÁ SENDO RENDERIZADO');        
        return (
            <>
                <button onClick={this.changeLikedState}> Toogle Like </button>
                <div>props.deafultLiked = {this.props.deafultLiked.toString()}</div>
                <div>state.liked = {this.state.liked.toString()}</div>

                {this.state.liked === true ? 'LIKED' : 'NOT LIKED'}
            </>
        )
    }
}

export default ToggleLike;