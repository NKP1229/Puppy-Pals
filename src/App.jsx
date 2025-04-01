import { useState } from 'react'
import './App.css';
import './newStyles.css';
import {puppyList} from './data.js';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  // console.log("puppyList: ", puppyList);
  function handleClick() {
    
  }
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  console.log(featuredPup);
  return (
      <div className="App">
      <p className="NameTitle">
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      </p>
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
