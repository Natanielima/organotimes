import './MostraTime.css'

const MostraTime = (props) =>{

    return(
        <img className='timeQueFoiSelecionado' src={(props.listaDeTimes.filter(function(obj){
            return obj.nome===props.timeSelecionado
        })).map(escudo=>escudo.escudo)}></img>
    )

}

export default MostraTime