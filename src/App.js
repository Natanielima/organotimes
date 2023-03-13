import { useState } from 'react';
import Banner from './componente/banner';
import Formulario from './componente/Formulario';
import MenuCima from './componente/menuCima';
import Rodape from './componente/Rodape';
import Time from './componente/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'America-MG',
      corPrimaria: '#00a749',
      escudo: "https://s.sde.globo.com/media/organizations/2019/02/28/America-MG-VERDE-fev2019-01.svg"
    },
    {
      id: uuidv4(),
      nome:     'Atlhetico',
      corPrimaria: '#e9072b',
      escudo: "https://s.sde.globo.com/media/organizations/2019/09/09/Athletico-PR.svg"
    },
    {
      id: uuidv4(),
      nome:     'Atlético-GO',
      corPrimaria: '#e9072b',
      escudo: "https://s.sde.globo.com/media/organizations/2020/07/02/atletico-go-2020.svg"
    },
    {
      id: uuidv4(),
      nome:     'Atlético-MG',
      corPrimaria: '#2b2422',
      escudo: "https://s.sde.globo.com/media/organizations/2018/03/10/atletico-mg.svg"
    },
    {
      id: uuidv4(),
      nome:     'Avaí',
      corPrimaria: '#0065ac',
      escudo: "https://s.sde.globo.com/media/organizations/2018/09/04/avai-futebol-clube.svg"
    },
    {
      id: uuidv4(),
      nome: 'Botafogo',
      corPrimaria: '#2b2422',
      escudo: "https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg"
    },
    {
      id: uuidv4(),
      nome:     'Ceará',
      corPrimaria: '#2b2422',
      escudo: "https://s.sde.globo.com/media/organizations/2019/10/10/ceara.svg"
    },
    {
      id: uuidv4(),
      nome:     'Corinthians',
      corPrimaria: '#000000',
      escudo: "https://s.sde.globo.com/media/organizations/2019/09/30/Corinthians.svg"
    },
    {
      id: uuidv4(),
      nome:     'Coritiba',
      corPrimaria: '#005f52',
      escudo: "https://s.sde.globo.com/media/organizations/2018/03/11/coritiba.svg"
    },
    {
      id: uuidv4(),
      nome:     'Cuiabá',
      corPrimaria: '#00642e',
      escudo: "https://s.sde.globo.com/media/organizations/2018/12/26/Cuiaba_EC.svg"
    },
    {
      id: uuidv4(),
      nome:     'Flamengo',
      corPrimaria: '#000000',
      escudo: "https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg"
    },
    {
      id: uuidv4(),
      nome:     'Fluminense',
      corPrimaria: '#a80023',
      escudo: "https://s.sde.globo.com/media/organizations/2018/03/11/fluminense.svg"
    },
    {
      id: uuidv4(),
      nome:     'Fortaleza',
      corPrimaria: '#0f5ba4',
      escudo: "https://s.sde.globo.com/media/organizations/2021/09/19/Fortaleza_2021_1.svg"
    },
    {
      id: uuidv4(),
      nome:     'Goiás',
      corPrimaria: '#005e4d',
      escudo: "https://s.sde.globo.com/media/organizations/2021/03/01/GOIAS-2021.svg"
    },
    {
      id: uuidv4(),
      nome:     'Internacional',
      corPrimaria: '#ff0007',
      escudo: "https://s.sde.globo.com/media/organizations/2018/03/11/internacional.svg"
    },
    {
      id: uuidv4(),
      nome:     'Juventude',
      corPrimaria: '#008f5d',
      escudo: "https://s.sde.globo.com/media/organizations/2021/04/29/Juventude-2021-01.svg"
    },
    {
      id: uuidv4(),
      nome:     'Palmeiras',
      corPrimaria: '#006f37',
      escudo: "https://s.sde.globo.com/media/organizations/2019/07/06/Palmeiras.svg"
    },
    {
      id: uuidv4(),
      nome:     'Red Bull Bragantino',
      corPrimaria: '#fa173c',
      escudo: "https://s.sde.globo.com/media/organizations/2021/06/28/bragantino.svg"
    },
    {
      id: uuidv4(),
      nome:     'Santos',
      corPrimaria: '#1f1819',
      escudo: "https://s.sde.globo.com/media/organizations/2018/03/12/santos.svg"
    },
    {
      id: uuidv4(),
      nome:     'São Paulo',
      corPrimaria: '#1f1819',
      escudo: "https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg"
    },    
  ])


  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaboradores=>colaboradores.id !== id))
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time=>{
      if(time.id===id){
        time.corPrimaria=cor;
      }
      return time;
    }))
  }
  

  const [colaboradores, setColaboradores ]= useState([
    {
      id: uuidv4(),
      favorito: false,
      cargo:"meio de campo",
      imagem:"https://pbs.twimg.com/profile_images/1597421774676828165/m-BUQtop_400x400.jpg",
      nome:"jairzinho",
      time:"Fluminense"
    },
    {
      id: uuidv4(),
      favorito: false,
      cargo:"meio de campo",
      imagem:"https://pbs.twimg.com/profile_images/1597421774676828165/m-BUQtop_400x400.jpg",
      nome:"natanzinho",
      time:"Flamengo"
    },
    {
      id: uuidv4(),
      favorito: false,
      cargo:"meio de campo",
      imagem:"https://pbs.twimg.com/profile_images/1597421774676828165/m-BUQtop_400x400.jpg",
      nome:"natanzinho",
      time:"Botafogo"
    },
    {
      id: uuidv4(),
      favorito: false,
      cargo:"meio de campo",
      imagem:"https://pbs.twimg.com/profile_images/1597421774676828165/m-BUQtop_400x400.jpg",
      nome:"natanzinho",
      time:"Santos"
    }
  ])

  const aoNovoColaboradorAdicionado = (colaborador)=>{
    setColaboradores([...colaboradores, colaborador])
  }

  function cadastrarTime(novoTime){
    setTimes([...times,{...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador=>{
      if(colaborador.id===id) colaborador.favorito = !colaborador.favorito
      return colaborador}))
  }

  return (
    <div className="App">
      <MenuCima times={times.map(time=>time.nome)}/>
      <Banner/>
      <Formulario cadastrarTime={cadastrarTime} times={times.map(time=>time.nome)} escudo={times} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} aoDeletar={deletarColaborador}/>

      {times.map(time=> <Time 
      aoFavoritar={resolverFavorito}
      mudarCor={mudarCorDoTime}
      key={time.nome}
      nome={time.nome}
      id={time.id}
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      time={time.escudo}
      colaboradores={colaboradores.filter(colaborador=>colaborador.time===time.nome)}
      aoDeletar={deletarColaborador}
      />)}
      <Rodape/>
    </div> 
  );
}
export default App;
