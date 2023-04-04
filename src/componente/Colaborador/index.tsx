import './colaborador.css'
import{AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'


const Colaborador = ({aoDeletar, corDeFundo, id, imagem,nome, cargo, colaborador, aoFavoritar, time })=>{

    function favoritar(){
        aoFavoritar(colaborador.id)
    }
    const propsFavorito={
        size:25,
        onClick: favoritar
    }



    return(
        
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={()=>aoDeletar(id)}/>
             
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
           
            <img className='colaboradorImagem' src={imagem} alt={nome} />
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito ? <AiFillHeart {...propsFavorito} color='#ff0000'/> : <AiOutlineHeart {...propsFavorito}/>}
            </div>
            <img className='timeCard' src={time.time}></img>
        </div>
        </div>
        </div>
    )
}

export default Colaborador;