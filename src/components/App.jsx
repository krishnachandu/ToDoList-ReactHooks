import React, { useState } from "react";

function App() {
  let [items, updateLi] = useState(["A item"]);
  let [it, updateNi] = useState("");
  function onTextChange(event) {
    it = event.target.value;
    updateNi(event.target.value);
  }
  function render(item) {
    return (
      <ul key={item}>
        <li>{item} </li>
      </ul>
    );
  }
  function addItems(event) {
    let value = it;
    updateLi([...items, value]);
    updateNi("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={onTextChange} type="text" value={it} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>{items.map((item) => render(item))}</div>
    </div>
  );
}

export default App;
