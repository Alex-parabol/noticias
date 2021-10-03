import React, {useState} from 'react'

export default function useSelect(stateInicial, paises) {

    const [ state, setState ] = useState(stateInicial)

    const SelectPais =()=> (
        <select
         className="browser-default width-med"
         value={state}
         onChange= {e => (setState(e.target.value))}
        >
           {paises.map(pais=>(
               <option 
               value={pais.value}
               key={pais.value}
               >{pais.label} </option>
           ))}
        </select>
    );

    return [ state, SelectPais ]

}
