import React, {useState} from 'react'

export default function useSelect(stateInicial, opciones) {

    const [ state, setState ] = useState(stateInicial)

    const SelectNoticias =()=> (
        <select
         className="browser-default width-large"
         value={state}
         onChange= {e => (setState(e.target.value))}
        >
           {opciones.map(opcion=>(
               <option 
               value={opcion.value}
               key={opcion.value}
               >{opcion.label} </option>
           ))}
        </select>
    );

    return [ state, SelectNoticias ]

}
