import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //this is For importing icons
import { faXmark  } from "@fortawesome/free-solid-svg-icons";     //this is For importing icons


function App() {
  const [task, setTask] = useState("");
  const [List, setList] = useState([]);

  function Addkro() {
    if (task == "") {
      alert("Please Enter the Task");
    } else {
      setList([...List, task]);
      setTask("");
    }
  }

  function removeKro(i) {
    //Creating Another Updated List
    const a = List.filter((elem, id) => {
      return id != i;
    });
    setList(a);
  }
  function removeAll() {
    setList([]);
  }

  return (
    <div className="bg-shashank p-8 rounded-2xl">
      <h1 className="text-black m-4 uppercase animate-bounce shadow-2xl ">ToDo List</h1>
      <input
        type="text"
        placeholder="Enter your task . . ."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="h-11 rounded-lg mr-3 p-3   border-none  outline-none"
      />
      <button onClick={Addkro}  >Add Task</button>
      
      {/*Showing List */}

      {List != [] &&        //&& is used as conditional shortCut (which have no else condition )
        List.map((data, i) => {
          return (
            <>
              <p key={i} className="list">
                <div>{data}</div>
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => removeKro(i)}
                  className="text-white p-1 cursor-pointer h-4 w-4 bg-black rounded-full"
                />                
              </p>

            </>
          );
        })}

      {List.length >= 1 && <button onClick={removeAll}> Romove All</button>}
 
    </div>
  );
}

export default App;
