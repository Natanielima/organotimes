import './Campo.css'

interface CampoDeTextoProps{
    aoAlterado: (valor: string)=>void
    placeholder: string
    label: string
    valor: string
    obrigatorio: boolean
    type: string
}

const Campo = ({aoAlterado,placeholder,label,valor,obrigatorio,type}:CampoDeTextoProps)=>{

    const aoDigitado=(evento: React.ChangeEvent<HTMLInputElement>)=>{
        aoAlterado(evento.target.value)
    }


    return(
        <div className={`campo - campo-${type}`}>
            <label>{label}</label>
            <input  type={type} value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholder} />
        </div>
    )
}

export default Campo