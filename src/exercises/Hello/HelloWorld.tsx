import React from 'react';

interface IProps {
    name: string;
    company: string;
    since?: number; //com o ponto de intrrogação fica opcional essa propriedade. Se não
    //tiver o ponto de interrogação ele fica obrigatório.
}
const HellloWorld: React.FC<IProps> = (props) => {
    return (
    <>    
    <div>Hello, {props.name}. How's {props.company}?</div>
    <div>Here since {props.since}</div>
    </>
    )
}

export default HellloWorld;