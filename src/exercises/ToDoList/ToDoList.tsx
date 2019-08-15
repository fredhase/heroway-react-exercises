import React from 'react';

interface ITodos {
    id: number,
    description: string,
    done: boolean,
}

interface IState {
    todos: ITodos[],
    idNew: number,
    newDescription: string,
}

class ToDoList extends React.Component<any, IState, ITodos> {
    constructor(props: {}){
        super(props);

        this.state = {
            todos: [],
            idNew: 0,
            newDescription: '',
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

    addTodo = () => {
        const todos = this.state.todos
        let idNew = this.state.idNew
        const newDescription = this.state.newDescription
        idNew++;
        todos.push(
            {id: idNew, description: newDescription, done: false,}
        )
        
        this.setState({
            todos: todos,
            idNew: idNew,
            newDescription: '',
        })
    }

    inputHandler = (x: any) => {
        this.setState({newDescription: x.target.value})
    }

    render() {
        return (
            <>
                <input className="Description" type="text" onChange={this.inputHandler}/>
                <button style={{margin: "15px"}} onClick={this.addTodo}>Add To do</button>
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
                <span>Click on the task to mark it as done</span>
            </>
        )
    }
}

export default ToDoList;