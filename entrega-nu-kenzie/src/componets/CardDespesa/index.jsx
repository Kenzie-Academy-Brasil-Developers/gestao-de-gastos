import img from "/src/assets/img/lixeira.png"

export function CardDespesa ({despesaObj , despesa , setDespesa}){

 
    function remove (e) {

        const newArr =  despesa.filter( (event) => event.id != e.target.id)

        setDespesa(newArr)

    }

    return(

        despesaObj.tipo == "entrada" ? 

        <li className='list__deslesas'>

            <div>

            <h2>{despesaObj.descricao}</h2>

                <span>R$ {despesaObj.valor}</span>
                <img id={despesaObj.id} onClick={remove} className='buttonRemove' src={img} alt="lixeira" />
            
            </div>

            <span>{despesaObj.tipo}</span>

        </li>
        
        :

        <li className='list__deslesas list__saida'>

        <div>

        <h2>{despesaObj.descricao}</h2>

            <span>R$ {despesaObj.valor}</span>
            <img id={despesaObj.id} onClick={remove} className='buttonRemove' src={img} alt="lixeira" />
        
        </div>

        <span>{despesaObj.tipo}</span>

    </li>

    )

}