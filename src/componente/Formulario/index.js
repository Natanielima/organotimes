import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa';
import "./Formulario.css";

const Formulario = (props) => {



  const [nome, setNome]=useState('')
  const [cargo, setCargo]=useState('')
  const [imagem, setImagem]=useState('')
  const [time, setTime]=useState('')
  const [nomeTime, setNomeTime]=useState('')
  const [corTime, setCorTime]=useState('')
  const [imagemTime, setImagemTime]=useState('')

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
        <Campo aoAlterado={valor=>setNome(valor)} valor={nome} obrigatorio={true} label="Jogador" placeholder="Digite o jogador" />
        <Campo aoAlterado={valor=>setCargo(valor)} valor={cargo} obrigatorio={true} label="Posição" placeholder="Digite sua posição" />
        <Campo aoAlterado={valor=>setImagem(valor)} valor={imagem} label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa  escudo={props} aoAlterado={valor=>setTime(valor)} valor={time} obrigatorio={true} label="Time" itens={props.times} />
        <Botao>
          Criar Card
        </Botao>
      </form>
      <form onSubmit={(evento)=>{
        evento.preventDefault()
        props.cadastrarTime({nome:nomeTime, corPrimaria: corTime, escudo: imagemTime})
      }}>
        <h2>Preencha os dados do seu TIME!</h2>
        <Campo aoAlterado={valor=>setNomeTime(valor)} valor={nomeTime} obrigatorio label="Nome" placeholder="Digite o nome de Time" />
        <Campo type='color' aoAlterado={valor=>setCorTime(valor)} valor={corTime} obrigatorio label="Cor" placeholder="Digite a cor do time" />
        <Campo aoAlterado={valor=>setImagemTime(valor)} valor={imagemTime} label="Imagem" placeholder="Insira o link da imagem" />
        <Botao>
          Criar TIME!
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
