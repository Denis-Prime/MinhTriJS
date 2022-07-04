import { useState } from "react";

const emptyValky = {
    name: "",
    age: "",
    weapon : "",
    element: ""
}

const AddNewVal = ()=>{
    const [newValky, setnewValky] = useState(emptyValky)

    const handleOnChange = (props) => {
        console.log(props)
    }

    return (
        <div className="ContainAddNew">
            <div>
                <label htmlFor="">Name</label>
                <input  id="name" name="name" type="text" onChange={handleOnChange}/>
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input  id="age" name="age" type="text" />
            </div>
            <div>
                <label htmlFor="weapon">Weapon</label>
                <input  id="weapon" name="weapon" type="text" />
            </div>
            <div>
                <label htmlFor="element">Element</label>
                <input  id="element" name="element" type="text" />
            </div>
        </div>
    )
}
export default AddNewVal