import React from 'react';
import Menu from './MenuEmpresa';
import { vagas } from '../Candidato/fixturesCandidato';
import {Card} from 'antd';


function AplicadasEmpresa() {
  return (
    <div>
      <div>
          <Menu selectedKey="apply_empresa" />
      </div>
      <div style={{marginTop:30}}>
      {
          vagas.map((vaga)=>(
              <Card size="small" title={vaga.nome} style={{ width: 300 }} style={{marginBottom:15}}>
                  <p>{vaga.empresa}</p>
                  <p>R${vaga.salario}</p>
                  <p>{vaga.descricao}</p>
              </Card>
          ))
      }
      </div>
    </div>

  );
}

export default AplicadasEmpresa;