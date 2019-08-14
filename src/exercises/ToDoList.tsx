import React from 'react';

interface ITodos {
    id: number,
    description: string,
    done: boolean,
}

interface IState {
    todos: ITodos[],
}

class ToDoList extends React.Component<any, IState, ITodos> {
    constructor(props: {}){
        super(props);

        this.state = {
            todos: [
            {id: 1, description: 'Study', done: false},
            {id: 2, description: 'Dishes', done: true},
            {id: 3, description: 'Skip Class', done: false},
            ]
        };
    }

    toogle = (todoId: number) => {
        const todos = this.state.todos.map(todo => {
            if (todoId === todo.id){
                todo.done = !todo.done;
            }

            return todo;
        });

        this.setState({todos: todos});
    };

    render() {
        return (
            <>
                <ul>
                    {this.state.todos.map(todo => {
                        return (
                            <li 
                            onClick={() => this.toogle(todo.id)}
                            style={{
                                listStyleType: "none",
                                textDecoration: todo.done ? "line-through" : "none",
                                cursor: "pointer",
                            }}>
                            {todo.description}
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default ToDoList;