import React from 'react';
import './App.css';

import HelloWorld from './exercises/Hello/HelloWorld';
import ToggleLike from './exercises/ToogleLike/ToggleLike';
import Counter from './exercises/Counter/Counter';
import ToDoList from './exercises/ToDoList/ToDoList';
import FreeNudes from './exercises/FreeNudes/FreeNudes';
import BasicCalc from './exercises/Testing/BasicCalc';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <HelloWorld 
        name={'Frederico'}
        company={"Heroway"}
        since={2019} /> */}

        <ToggleLike deafultLiked={false}/>

        {/* <Counter counterStart={0}/> */}

        {/* <ToDoList/> */}

        {/* <FreeNudes/> */}

        {/* <BasicCalc/> */}
      </header>
    </div>
  );
}

export default App;