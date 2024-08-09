import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [allItems, setAllItems] = useState([]);
  function handleSetItem(e) {
    console.log(e.target.value);
    setItem(e.target.value);
  }
  function handleAddItem() {
    setAllItems((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleSetItem} value={item} />
        <button>
          <span onClick={handleAddItem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {allItems.map((toDoItems) => {
            return <li>{toDoItems}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
