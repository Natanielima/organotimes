import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import "./Formulario.css";

const Formulario = (props) => {



  const [nome, setNome]=useState('')
  const [cargo, setCargo]=useState('')
  const [imagem, setImagem]=useState('')
  const [time, setTime]=useState('')

  const aoSalvar = (evento)=>{
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados do seu jogador!</h2>
        <CampoTexto aoAlterado={valor=>setNome(valor)} valor={nome} obrigatorio={true} label="Jogador" placeholder="Digite o jogador" />
        <CampoTexto aoAlterado={valor=>setCargo(valor)} valor={cargo} obrigatorio={true} label="Posição" placeholder="Digite sua posição" />
        <CampoTexto aoAlterado={valor=>setImagem(valor)} valor={imagem} label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa  escudo={props} aoAlterado={valor=>setTime(valor)} valor={time} obrigatorio={true} label="Time" itens={props.times} />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
