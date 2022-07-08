import React ,{useState} from "react";
import ToDoList from './ToDoList';
import './index.css';
const App = () => {
    const  [text,setText] = useState("");
    const [item,setItem] = useState([]);

    const InputEvent = (event) =>{
        setText(event.target.value);
    }
    const itemList =() =>{
      setItem((oldItem) =>{
        return [...oldItem,text];
      });
      setText(" ");
    }

    const deleteItem = (id) =>{
      console.log('Deleted');
      setItem((oldItem)=>{
          return  oldItem.filter((arrElem,index)=>{
              return index!==id;
          })
      })
  }
    return (
        <>
            <div className="main_div">
                <div className="inner_div">
                    <h2>ToDo List</h2>
                    <input type="text" placeholder="Add Items" onChange={InputEvent} value={text}/>
                    <button onClick={itemList}>+</button><br />
                    <ol> 
                        {item.map((itemVal,index)=>{
                          return <ToDoList key={index} id={index} text={itemVal} onSelect={deleteItem} />
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default App;