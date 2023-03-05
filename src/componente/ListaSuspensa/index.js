import MostraTime from '../MostraTime';
import './ListaSuspensa.css'

const ListaSuspensa= (props)=>{

    return(
        <div className='Lista-suspensa'>

            <label>{props.label}</label>
           

            <select  onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor} id='selecaoTimes'>

            
                {props.itens.map(item =><option key={item}>{item}       </option>)}
            </select>

            <MostraTime timeSelecionado={(props.escudo.escudo.filter(function(obj){
            return obj.nome===props.valor   }).map(nome=>nome.nome)[0])} listaDeTimes={props.escudo.escudo} />
        </div>
    )
}
export default ListaSuspensa;