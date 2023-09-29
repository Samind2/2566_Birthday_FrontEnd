import { useState } from 'react'
import data from './data';
import List from './List';


function App() {
  const [people, setPeople] = useState(data);
  const clearAll = () =>{
    setPeople([]);
  }
 

  return (
  
      <div>
        <h1>Workshop1 : Brithday List Project</h1>
        <h2>Supanee Rungsirat</h2>
        <main>
          <section className="container">
          <h3>{people.length} birthday today</h3>
          <List people = {people}/>
          <button onClick={clearAll}>Clear All</button>
          </section>
        </main>
      </div>      
  )
}

export default App
