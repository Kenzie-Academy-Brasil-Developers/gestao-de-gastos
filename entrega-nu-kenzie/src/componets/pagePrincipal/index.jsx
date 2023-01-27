
export function PageInicial ({setPrincipal}){

    const inicializar = () => {

        setPrincipal(false)
        document.querySelector("body").style.backgroundColor = "#F8F9FA"
    
    
      }


    return (

    <main>

        <section className='section__logo'>

            <h1><span>Nu</span> Kenzie</h1>

            <h2>Centralize o controle das suas finanças</h2>

            <span>de forma rápida e segura</span>

            <button type='button' onClick={inicializar}>Iniciar</button>

        </section>

        <section className='section__img'>

            <img src="../src/assets/img/imagemInicio.png" alt="imagem" />

        </section>

    </main>
    )

}

