import React, { useState } from 'react'

import './App.css';
import Button from './components/button'
import Search from './components/Search';
const data = [

  { id: 1, name: 'Hammed is good' },
  { id: 1, name: 'Maurice love Anu' },
  {id:1, name: 'Hammed is a coder'},
  {id:1, name: 'Obogo is a demigod of code'},
  {id:1, name: 'Nwaubani111 is code'},
  {id:1, name: 'Love of money is good'},
  { id: 1, name: 'money makes Anu a resuable angel' },
]

function App() {

  const [story, setStory] = useState([])
 
const handleSearch = (q) => {
  const result = data.filter(d => d.name.toLowerCase().includes(q.toLowerCase()));
  setStory(result)
}

  return (
    <div className="App">
     <h2>Reusable search field </h2>
      <Button 
      afterClick={()=> console.log('l-----------')}
      text='baba click me'
      width='200px'
      />
      <Button
        afterClick={() => alert('hello welcome')}
        text='show alert'
        color ='white'
        bgcolor="red"
        btnStyle={{
          fontWeight: 'bold',
          fontSize: 25,
          borderRadius: 0
        }}
      />
      <Search placeholder='Search by Name' onSearch={(h) => handleSearch(h)}/>
      <div style={{marginTop: 50}}> 
        <ul>
          {story.map(s =>(
            <li style={{ marginTop: 5, fontSize:21 }}>{s.name}</li>
          ))}
        </ul>
        </div>
    </div>
  );
}

export default App;
