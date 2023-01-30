import esqueleto_1  from "/src/assets/img/barraTransversal1.png"
import esqueleto_2  from "/src/assets/img/barraTransversal2.png"

export function EsqueletoImagens() {

    return (
        <>

        <h2>Você ainda não possui nenhum lançamento</h2>

        <li className='list__deslesas list__saida'>

            <img src= {esqueleto_1} />
            <img className="barraTransversal2" src={esqueleto_2} alt="esqueleto" />
        
        </li>

        <li className='list__deslesas list__saida'>

            <img src= {esqueleto_1} />
            <img className="barraTransversal2" src={esqueleto_2} alt="esqueleto" />

        </li>

        <li className='list__deslesas list__saida'>

            <img src= {esqueleto_1} />
            <img className="barraTransversal2" src={esqueleto_2} alt="esqueleto" />

        </li>

        </>

    )

}