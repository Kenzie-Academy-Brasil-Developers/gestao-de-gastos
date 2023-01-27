
export function ValorTotal ({despesas}){
    
    let entrada = despesas.filter((e) => e.tipo == "entrada")
    let saida = despesas.filter((e) => e.tipo != "entrada")

    let entradaSomada = entrada.reduce((acumulador , valorAtual ) => acumulador + valorAtual.valor , 0 )
    let saidaSomada = saida.reduce((acumulador , valorAtual ) => acumulador + valorAtual.valor , 0 )
   
    console.log(entradaSomada)
   
    

    return(

        entradaSomada != 0 ?

        <div className='total__despesas'>
            <div>
                <span>Valor Total</span>
                <span>$ {entradaSomada - saidaSomada}</span>
            </div>
            <span>O valor se refere ao saldo</span>
        </div>

        :

        <>
        </>
    )
}