import React from 'react';
import {BrowserRouter as ReactRouter, Route, Switch} from 'react-router-dom';

import LoginEmpresa from './Pages/Empresa/LoginEmpresa';
import LoginCandidato from './Pages/Candidato/LoginCandidato';
import HomeEmpresa from './Pages/Empresa/HomeEmpresa';
import HomeCandidato from './Pages/Candidato/HomeCandidato';
import AplicadasEmpresa from './Pages/Empresa/AplicadasEmpresa';
import AplicadasCandidato from './Pages/Candidato/AplicadasCandidato';
import Curriculo from './Pages/Perfil/Curriculo';
import Perfil from './Pages/Perfil/Perfil';
import Cadastro from './Pages/Cadastro';
import Vagas from './Pages/Empresa/Vagas';

class Router extends React.Component {
  render(){
    return (
      <ReactRouter>   
          <Switch>
            <Route exact path="/login_empresa" component={LoginEmpresa} />
            <Route exact path="/login_candidato" component={LoginCandidato} />
            <Route exact path="/home_empresa" component={HomeEmpresa} />
            <Route exact path="/home_candidato" component={HomeCandidato} />
            <Route exact path="/apply_empresa" component={AplicadasEmpresa} />
            <Route exact path="/apply_candidato" component={AplicadasCandidato} />
            <Route exact path="/perfil" component={Perfil} />
            <Route exact path="/curriculo" component={Curriculo} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/vagas" component={Vagas} />

          </Switch>       
      </ReactRouter>
    );
  }
}

export default (Router);
