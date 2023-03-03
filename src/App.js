import { useState } from 'react';
import Banner from './componente/banner';
import Formulario from './componente/Formulario';
import MenuCima from './componente/menuCima';
import Rodape from './componente/Rodape';
import Time from './componente/Time';

function App() {

  const times = [
    {
      nome: 'America-MG',
      corPrimaria: '#00a749',
      corSecundaria: '#FFFFFF',
      escudo: "https://s.sde.globo.com/media/organizations/2019/02/28/America-MG-VERDE-fev2019-01.svg"
    },
    {
      nome:     'Atlhetico',
      corPrimaria: '#e9072b',
      corSecundaria: '#2b2422',
      escudo: "https://s.sde.globo.com/media/organizations/2019/09/09/Athletico-PR.svg"
    },
    {
      nome:     'Atlético-GO',
      corPrimaria: '#e9072b',
      corSecundaria: '#2b2422',
      escudo: "https://s.sde.globo.com/media/organizations/2020/07/02/atletico-go-2020.svg"
    },
    {
      nome:     'Atlético-MG',
      corPrimaria: '#2b2422',
      corSecundaria: '#FFFFFF',
      escudo: "https://s.sde.globo.com/media/organizations/2018/03/10/atletico-mg.svg"
    },
    {
      nome:     'Avaí',
      corPrimaria: '#0065ac',
      corSecundaria: '#FFFFFF',
      escudo: "https://s.sde.globo.com/media/organizations/2018/09/04/avai-futebol-clube.svg"
    },
    {
      nome: 'Botafogo',
      corPrimaria: '#2b2422',
      corSecundaria: '#FFFFFF',
      escudo: "https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-svg.svg"
    },
    {
      nome:     'Ceará',
      corPrimaria: '#2b2422',
      corSecundaria: '#FFFFFF',
      escudo: "https://s.sde.globo.com/media/organizations/2019/10/10/ceara.svg"
    },
    {
      nome:     'Corinthians',
      corPrimaria: '#000000',
      corSecundaria: '#FFFFFF',
      escudo: "https://s.sde.globo.com/media/organizations/2019/09/30/Corinthians.svg"
    },
    {
      nome:     'Coritiba',
      corPrimaria: '#005f52',
      corSecundaria: '#FFFFFF',
      escudo: "https://s.sde.globo.com/media/organizations/2018/03/11/coritiba.svg"
    },
    {
      nome:     'Cuiabá',
      corPrimaria: '#00642e',
      corSecundaria: '#ffd701',
      escudo: "https://s.sde.globo.com/media/organizations/2018/12/26/Cuiaba_EC.svg"
    },
    {
      nome:     'Flamengo',
      corPrimaria: '#000000',
      corSecundaria: '#df0009',
      escudo: "https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-2018.svg"
    },
    {
      nome:     'Fluminense',
      corPrimaria: '#a80023',
      corSecundaria: '#006346',
      escudo: "https://s.sde.globo.com/media/organizations/2018/03/11/fluminense.svg"
    },
    {
      nome:     'Fortaleza',
      corPrimaria: '#0f5ba4',
      corSecundaria: '#e12026',
      escudo: "https://s.sde.globo.com/media/organizations/2021/09/19/Fortaleza_2021_1.svg"
    },
    {
      nome:     'Goiás',
      corPrimaria: '#005e4d',
      corSecundaria: '#FFFFFF',
      escudo: "https://s.sde.globo.com/media/organizations/2021/03/01/GOIAS-2021.svg"
    },
    {
      nome:     'Internacional',
      corPrimaria: '#ff0007',
      corSecundaria: '#fefefe',
      escudo: "https://s.sde.globo.com/media/organizations/2018/03/11/internacional.svg"
    },
    {
      nome:     'Juventude',
      corPrimaria: '#008f5d',
      corSecundaria: '#ffffff',
      escudo: "https://s.sde.globo.com/media/organizations/2021/04/29/Juventude-2021-01.svg"
    },
    {
      nome:     'Palmeiras',
      corPrimaria: '#006f37',
      corSecundaria: '#ffffff',
      escudo: "https://s.sde.globo.com/media/organizations/2019/07/06/Palmeiras.svg"
    },
    {
      nome:     'Red Bull Bragantino',
      corPrimaria: '#fa173c',
      corSecundaria: '#ffd701',
      escudo: "https://s.sde.globo.com/media/organizations/2021/06/28/bragantino.svg"
    },
    {
      nome:     'Santos',
      corPrimaria: '#1f1819',
      corSecundaria: '#ffffff',
      escudo: "https://s.sde.globo.com/media/organizations/2018/03/12/santos.svg"
    },
    {
      nome:     'São Paulo',
      corPrimaria: '#1f1819',
      corSecundaria: '#ff0003',
      escudo: "https://s.sde.globo.com/media/organizations/2018/03/11/sao-paulo.svg"
    },    
  ]

  

  const [colaboradores, setColaboradores ]= useState([])

  const aoNovoColaboradorAdicionado = (colaborador)=>{
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <MenuCima times={times.map(time=>time.nome)}/>
      <Banner/>
      <Formulario times={times.map(time=>time.nome)} escudo={times} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time=> <Time 
      key={time.nome}
      nome={time.nome}
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      time={time.escudo}
      colaboradores={colaboradores.filter(colaborador=>colaborador.time===time.nome)}
      />)}
      <Rodape/>
    </div> 
  );
}
export default App;
