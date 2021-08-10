
import './App.css';
import './index.css';
import data from "./data"
import List from "./List"
import React ,{useState} from 'react';


function App() {
  const[people,setPeople]=useState(data);
  const[press,setPress]=useState(false);
  function click(){
    if (press===false){
    setPeople([]);
    setPress(true);
    }else 
    {
      setPress(false);
      setPeople(data);
    }

  }
  return (<main>
    <section className="container">
      <h3>{people.length}  Birthday's today </h3>
      <List people={people}/>
      <button onClick={click}>Click Me</button>
    </section>
  </main>
  )
}

export default App;
