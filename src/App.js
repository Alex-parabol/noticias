import React, {Fragment, useState, useEffect} from 'react'
import Header from './components/header'
import Form from './components/Form'
import axios from 'axios'
import ListadoNoticias from './components/Noticias/ListadoNoticias'

function App() {

  // definimos categoría y noticias

  const [categoria, setCategoria ] = useState('')
  const [ pais, setPais ] = useState('')
  const [ noticias, setNoticias ] = useState([])

 

/*   useEffect(()=> {
    const consultarAPI = async () => {
      const url = `
      https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=0f12cfb058ae49a1a09c023c4adb52d7
      `
      const resultado = await axios.get(url);
      setNoticias(resultado.data.articles)

    }
    consultarAPI()
  }, [categoria, pais]) */

  useEffect(()=> {
    const consultarAPI = async () => {
      const url = `
      https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=0f12cfb058ae49a1a09c023c4adb52d7
      `
      const respuesta = await fetch(url);
      const noticias = await respuesta.json()
      setNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria, pais])
  console.log(noticias)
  return (
    <Fragment>
    <Header titulo='Buscador de Noticias' />
    <div className="container white">
      <Form
      setCategoría={setCategoria}
      setPais={setPais}
      />
    </div>
    <ListadoNoticias 
      noticias={noticias}
    />
    </Fragment>
  );
}

export default App;
