import { useState } from 'react'
import { CardDespesa } from '../CardDespesa'
import { EsqueletoImagens } from "../EsqueletosImg";
import { ValorTotal } from "../ValorTotal/ValorTotal"

export function PagePrincipal({setHome}) {

  const  [despesa, setDespesa] = useState([])

    const  voltarInicio = () => {

      setHome(true)
      document.querySelector("body").style.backgroundColor = " #343A40"
    
    }

    function teste (event){
        

      event.preventDefault()

      let objDespesa = {}

      
      objDespesa.descricao = event.target[0].value 
      objDespesa.valor = Number(event.target[1].value)
      objDespesa.tipo = event.target[2].value
      objDespesa.id = Math.random()

      event.target[0].value == "" ? setDespesa([...despesa ]) : setDespesa([...despesa , objDespesa])

      event.target[0].value = ""
      event.target[1].value = ""

    }

    return(

    <>
      <header>
        <div className='container__header'>
          <div><h1><span>Nu </span>Kenzie</h1></div>
          <button type='button' onClick={voltarInicio}>Iniciar</button>
        </div>
      </header>


      <main className='mainPage--2'>
        <section  className='section__form__lancamentos' >
          <form onSubmit={ teste } className='form__lancamentos'>

            <div>
              <label htmlFor="desricao">Descrição</label>
              <input name='desricao' type="text" />
              <span>Ex: Compra de roupas</span>
            </div>

            <div id='inputs_div-2'>

              <div>
                  <label htmlFor="valor">Valor</label>
                  <input onChange={(e => console.log(e.target.value))} name='valor' type="number" />
              </div>

              <div>
                <label htmlFor="tipoValor">Tipo de valor</label>
                <select> 
                  <option value="entrada">Entrada</option>
                  <option value="despesa">Despesa</option>
                </select>
              </div>

            </div>

            <button className='butonInserirValor'>Inserir valor</button>

          </form>

          <ValorTotal despesas={despesa}/>

        </section>

        <section className="section__lancamentos">

          <span>Resumo financeiro</span>
          
          

          <ul>

            {
            
            despesa.length != 0 ? despesa.map(e => <CardDespesa key ={e.id} despesaObj = {e} despesa = {despesa}  setDespesa ={setDespesa} />) 

            : 
            
            <EsqueletoImagens /> 

            }
          
          </ul>

        </section>
        
      </main>

    </>

)

}