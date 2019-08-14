import React from 'react';
import './App.css';

import HelloWorld from './exercises/HelloWorld';
import ToggleLike from './exercises/ToggleLike';
import Counter from './exercises/Counter';
import ToDoList from './exercises/ToDoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <HelloWorld 
        name={'Frederico'}
        company={"Heroway"}
        since={2019} />

        <ToggleLike deafultLiked={false}/> */}

        {/* <Counter counterStart={0}/> */}

        <ToDoList/>
      </header>
    </div>
  );
}

export default App;