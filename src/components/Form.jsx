import React from 'react';
import './Form.css'
import useSelect from '../hooks/useSelect'
import useCountry from '../hooks/useCountry'

const Form =({setCategoría, setPais})=> {
    //utilizamos custom hook
     
     const OPCIONES = [
         {value: 'general', label:'General'},
         {value: 'business', label:'Negocios'},
         {value: 'entertainment', label:'Entretenimiento'},
         {value: 'generalhealth', label:'Salud'},
         {value: 'science', label:'Ciencia'},
         {value: 'sports', label:'Deportes'},
         {value: 'technology', label:'Tecnología'},
     ]

     const PAISES = [
         {value: 'us', label:'USA'},
         {value: 'gb', label:'Inglaterra'},
         {value: 'ru', label:'Rusia'},
         {value: 'jp', label:'Japón'},
         {value: 'nz', label:'Nueva Zelanda'},
         {value: 'fr', label:'Francia'}
     ]

     const [ categoria, SelectNoticias] = useSelect('general', OPCIONES) 

     const [ pais, SelectPais ] = useCountry('us', PAISES)

     const handleChange =e=>{
         e.preventDefault();
         //pasamos categoría a app.js
         setCategoría(categoria)
         setPais(pais)
     }

    return (
        <div className='buscador'>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={handleChange}
                >
                    <h2 className='heading'>Encuentra noticias por Categoría</h2>
                    <SelectNoticias 
                    
                    />
                    <SelectPais />
                    <div className="input-field col s12">
                        <input
                        type="submit"
                        className='btn-block btn-large amber darken-2'
                        value='buscar'
                         />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;