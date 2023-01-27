import { useState } from 'react'
import './App.css'
import { PagePrincipal } from './componets/Inicio'
import {PageInicial} from './componets/pagePrincipal'



function App() {

  let [iniciar , setIniciar] = useState(true)

  return (


    iniciar ? (
     <PageInicial setPrincipal = {setIniciar} />
    )

    :
    
    (
      <PagePrincipal setHome ={setIniciar} />
    )

  )
}

export default App
