import { Fragment } from 'react';
import { useState } from 'react' 

export function App(){
  const [name, setName] = useState('');
  return (
    <Fragment> 
      <input type="text" onChange={e => setName(e.target.value)}/>
      <h2>
        {name}
      </h2>
      <h2>O que é necessário para começar</h2>
    </Fragment>
  );
}

export function OutraCoisa(){
  return (
    <div>
      <h1>Leonardo Rimes</h1>


    </div>
   
  );
}