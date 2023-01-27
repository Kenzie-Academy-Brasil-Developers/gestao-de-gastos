export function CardDespesa ({despesaObj , despesa , setDespesa}){

 
    function remove (e) {

       


        console.log(e.target)

        const newArr =  despesa.filter( (event) => event.id != e.target.id)

        console.log(e.target.id)
        setDespesa(newArr)

    }

    console.log(despesa)
    return(

        despesaObj.tipo == "entrada" ? 

        <li className='list__deslesas'>

            <div>

            <h2>{despesaObj.descricao}</h2>

                <span>R$ {despesaObj.valor}</span>
                <img id={despesaObj.id} onClick={remove} className='buttonRemove' src="../src/assets/img/lixeira.png" alt="lixeira" />
            
            </div>

            <span>{despesaObj.tipo}</span>

        </li>
        
        :

        <li className='list__deslesas list__saida'>

        <div>

        <h2>{despesaObj.descricao}</h2>

            <span>R$ {despesaObj.valor}</span>
            <img id={despesaObj.id} onClick={remove} className='buttonRemove' src="../src/assets/img/lixeira.png" alt="lixeira" />
        
        </div>

        <span>{despesaObj.tipo}</span>

    </li>

       
      

       


    )

}