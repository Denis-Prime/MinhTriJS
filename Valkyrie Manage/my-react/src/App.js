
import './App.css';
import { useState } from 'react';
import AddNewVal from './Components/AddNewVal';
const InitValList = [
  {
    id: 0,
    name: "Herrscher of Thunder",
    age: 18,
    weapon: "Sword field",
    element: "Lightning",
  },
  {
    id: 1,
    name: "Herrscher of Flamescion",
    age: 17,
    weapon: "Greatsword",
    element: "Fire",
  },
  {
    id: 2,
    name: "Herrscher of Reason",
    age: 16,
    weapon: "Heavy canon",
    element: "Ice",
  },
  {
    id: 3,
    name: "Disciplinary Perdition",
    age: 25,
    weapon: "Chakram",
    element: "Lightning",
  },

]


const emptyValky = {
  name: "",
  age: "",
  weapon: "",
   element: "",
}

function App() {
  const [NewVAL,SetNewVal] = useState(emptyValky)
  const handleOnChange = (props) => {
    const { name, value } = props.target
    SetNewVal({...NewVAL,[name]:value})
  }

  const HandleOnSubmit = (event) => {
    event.preventDefault()
    SetNewVal({...NewVAL,['id'] : ValList.length+1})
    setValList([...ValList,NewVAL])
  }

  const AddValkyXML = (
    <form className="ContainAddNew" onSubmit={HandleOnSubmit}>
      <div>
        <label htmlFor="">Name</label>
        <input id="name" name="name" type="text" onChange={handleOnChange} />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input id="age" name="age" type="text" onChange={handleOnChange} />
      </div>
      <div>
        <label htmlFor="weapon">Weapon</label>
        <input id="weapon" name="weapon" type="text" onChange={handleOnChange}/>
      </div>
      <div>
        <label htmlFor="element">Element</label>
        <input id="element" name="element" type="text" onChange={handleOnChange}/>
      </div>
      <button type='submit'>ADD</button>
    </form>
  )


  const [ValList, setValList] = useState(InitValList)

  const varListXML = ValList.map(val => {
    return (
      <div className={[val.name + " Card"]}>
        <button className='delete' onClick={() => HandelDeleteVal(val.id)}>X</button>
        <div className='ValName'>{val.name.toUpperCase()}</div>
        <div className='Age'>Age: {val.age}</div>
        <div className='Weapon'>Weapon: {val.weapon}</div>
        <div className='Element'>Element: {val.element}</div>
      </div>
    )
  })
  const HandleBtnAdd = () => {
    const newVal = {
      id: ValList.length+1,
      name: "Sliverwing: N-EX",
      age: 18,
      weapon: "Multi-Unit Arm 0019",
      element: "Ice",
    };
    let newstate = [...ValList, newVal]
    setValList(newstate)
  }

  const HandleBtnFilte = () => {
    const filteValList = ValList.filter(val => val.age >= 18)
    setValList(filteValList)
  }

  const HandelDeleteVal = (id) => {
    const newValList = ValList.filter(val=> val.id !==id)
    setValList(newValList)
  }
  const buttonXML = (
    <div className='btn'>
      <div><h1>Valkyrie Manager</h1></div>
      <button className='Add' onClick={HandleBtnAdd}>Add</button>
      <button className='Filte' onClick={HandleBtnFilte}>Filte Age 18 ^^</button>
    </div>
  )
  return (
    <div className='contain'>
          {buttonXML}
        <div className='add'>
          {AddValkyXML}
        </div>
        <div className="App">
          {varListXML}
        </div>

    </div>
  );
}
export default App;
