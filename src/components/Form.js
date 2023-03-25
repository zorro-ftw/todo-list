import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ addTodo }) {
  const [inputText, setInputText] = useState("");

  function updateInput(e) {
    setInputText(e.target.value);
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Type Todo..."
        value={inputText}
        onChange={updateInput}
      />
      <input
        className="add-btn"
        type="submit"
        value="Add"
        onClick={(e) => {
          e.preventDefault();
          addTodo({
            id: uuidv4(),
            title: inputText,
            isCompleted: false,
          });
        }}
      ></input>
    </form>
  );
}

export default Form;
