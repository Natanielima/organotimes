import './colaborador.css'

const Colaborador = (props)=>{
    return(
        <div className='colaborador'>
             
        <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
           
            <img className='colaboradorImagem' src={props.imagem} alt={props.nome} />
            {console.log(props.time.time)}
        <div className='rodape'>
            <h4>{props.nome}</h4>
            <h5>{props.cargo}</h5>
            <img className='timeCard' src={props.time.time}></img>
        </div>
        </div>
        </div>
    )
}

export default Colaborador;