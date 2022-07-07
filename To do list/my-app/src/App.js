import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './App.css';

const Initstate = [
  {
    id: uuidv4(),
    Name: "Learn react JS",
  }
]

const initNewToDo = {
  id: uuidv4(),
  Name:"bruh"
}

function App() {
  
  const [newToto, SetNewToDo] = useState(initNewToDo)
  const [Lists, SetList] = useState(Initstate)

  const HandleOnPressEnter = (event)=>{
    console.log(event.target.value);
    if(event.key ==='Enter'){
      SetNewToDo({...newToto,'id':uuidv4()})
      SetList([...Lists,newToto])
    }
    else{
      SetNewToDo({...newToto,["Name"]:event.target.value})
    }
  }

  const HandleBtnOnClick = (event)=>{
    console.log((event.target.parentElement.id));
    const newList = Lists.filter(item => item.id !== event.target.parentElement.id)
    console.log(newList);
    SetList(newList)
  }

  const itemsXML = Lists.map(item => {
    return (<li id={item.id}>{item.Name} <button id_del  = {(item.id) }  onClick={HandleBtnOnClick}>X</button></li>)
  })
  
  const Xml = (
    <div className='contain'>
      <input className='input'  onKeyUp = {HandleOnPressEnter}></input>
      <div className='List'>
        {itemsXML}
      </div>
    </div>
  )
  return (
    <div className="App">
      {Xml}
    </div>
  );
}

export default App;
