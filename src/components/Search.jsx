import React, { useState } from 'react'
import History from './History';


const Search = ({ placeholder, onSearch }) => {
  const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);


  const show = ()=>{
    setVisible(true)
  }
const close = ()=>{
    setVisible(false)
  }

  const handleChange = e => {
      setText(e.target.value)
  } 
  const handleSubmit = e => {
    e.preventDefault();
   if(text.trim()){
      setSearchHistory([...searchHistory, text]);
      onSearch(text);
      setText("");
   }

  } 
const removeHistory = (history) => {
const newSearchHistory = searchHistory.filter(s => s !== history);
    setSearchHistory(newSearchHistory)
}

const populateInput = (text) => setText(text);


  return (
    <div className="search-icon">
      {!visible ? (
        <span onClick={show}>&#x1F50E; </span>
      ) : (
        <div>
          <p className="x" onClick={close}>
            X
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="search"
              onChange={handleChange}
              value={text}
              placeholder={placeholder}
            />
          </form>
          <div style={{ marginTop: 20 }}>
            {searchHistory.map((h) => (
              <History
                text={h}
                onClicked={() => removeHistory(h)}
                onbodyClick={() => populateInput(h)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search
