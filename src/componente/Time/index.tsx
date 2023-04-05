import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'
import { Icolaborador } from '../../compartilhado/interfaces/IColaborador';

interface TimeProps{
    corPrimaria: string
    nome: string
    colaboradores: Icolaborador[]
    id: string
    mudarCor: (cor: any, id: any) => void
    time:string
    aoDeletar: (id: any) => void
    aoFavoritar: (id: any) => void
}

const Time =(props: TimeProps)=>{

    return(

        props.colaboradores.length>0 ?

        <section className='time' style={{backgroundColor:hexToRgba(props.corPrimaria,'0.5')}}>

            <input onChange={evento=>props.mudarCor(evento.target.value, props.id)} value={props.corPrimaria} type='color' className='input-cor' />
            <h3 style={{borderColor:props.corPrimaria}} >{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador=>{
                return <Colaborador colaborador={colaborador} id={colaborador.id} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={props.corPrimaria} time={props} aoDeletar={props.aoDeletar} aoFavoritar={props.aoFavoritar}/>
            }
            
            )}
            </div>
            
        </section>

        : <></>
    )

}

export default Time