import React from 'react';
import Menu from '../Candidato/MenuCandidato';
import { Input, Card, Button } from 'antd';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Perfil() {
  return (
    <div>
      <div>
          <Menu selectedKey="perfil" />
      </div>
      <Card style={{ margin: '40px auto', textAlign: 'center'}}>
        <label>Nome:</label>
        <Input defaultValue="Gabriela Botelho"/>
        <br />
        <br />
        <label>Idade:</label>
        <Input defaultValue="21"/>
        <br />
        <br />
        <label>Experiência:</label>
        <Input defaultValue="5 anos"/>
        <br />
        <br />
        <label>Habilidades:</label>
        <Input defaultValue="HTML5, CSS3, JavaScript"/>
        <br />
        <br />
        <Link to="/home_candidato">
          <Button style={{backgroundColor:"lightblue"}}>
            Salvar
            </Button>
        </Link>
        
      </Card>
    </div>

  );
}

export default Perfil;