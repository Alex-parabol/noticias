import React, {Fragment, useState, useEffect} from 'react'
import Header from './components/header'
import Form from './components/Form'

function App() {

  // definimos categoría y noticias

  const [categoria, setCategoria ] = useState('')
  const [ pais, setPais ] = useState('')

  useEffect(()=> {
    const consultarAPI = async () => {
      const url = `
      https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=0f12cfb058ae49a1a09c023c4adb52d7
      `
    }
    consultarAPI()
  }, [categoria])

  return (
    <Fragment>
    <Header titulo='Buscador de Noticias' />
    <div className="container white">
      <Form
      setCategoría={setCategoria}
      setPais={setPais}
      />
    </div>
    </Fragment>
  );
}

export default App;
