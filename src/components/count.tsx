import { useState } from "react"

export function Count (){
    const[value , setValue] = useState(0)

    function increaseValue(){
        setValue(value+1);
    }

    function decreaseValue(){
        if(value>0){
            setValue(value-1)
        }
    }

    function resetValue(){
        setValue(0)
    }

    return <div>
        <h1>{value}</h1>
        <button onClick={increaseValue}> Add value  </button>
        <button onClick={decreaseValue}> Sub value </button>
        <button onClick= {resetValue} > Reset</button>
    </div>
}

//     export function Percentage (){

//     let [value, setValue] = useState((6))

//         setValue((value/60)*100)

//     return <div>
//         <h1>{value}</h1>
//         <button onClick={Percentage}> Calculate Percentage  </button>
//     </div>
// }

