import { useState } from 'react'
import './App.css';
import {puppyList} from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  // console.log("puppyList: ", puppyList);
  function handleClick() {
    
  }

  return (
    <div className="App">
      <p>{featPupId}</p>
      {/* { featuPupID && <p>{ featPupId }</p> } */}
      {puppies.map((puppy) => {
        return (
          <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}
export default App
