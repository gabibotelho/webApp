import React from 'react';
import Menu from './MenuCandidato';
import { vagas } from './fixturesCandidato';
import {Card} from 'antd';


function AplicadasCandidato() {
  return (
    <div>
      <div>
          <Menu selectedKey="apply_candidato" />
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

export default AplicadasCandidato;