import React from 'react';
import Menu from './MenuEmpresa';
import { Input, Card, Button } from 'antd';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Vagas() {
  return (
      <div>
        <div>
            <Menu selectedKey="vagas" />
        </div>
        <Card style={{ margin: '40px auto', textAlign: 'center'}}>
            <label>Cargo:</label>
            <Input defaultValue="Desenvolvedor Front-End React Junior"/>
            <br />
            <br />
            <label>Salario:</label>
            <Input defaultValue="3000"/>
            <br />
            <br />
            <label>Descricao:</label>
            <Input defaultValue="Contratação PJ, atuar em manutenção e criação de sites"/>
            <br />
            <br />
            <Link to="/home_empresa">
            <Button style={{backgroundColor:"lightblue"}}>
                Salvar
                </Button>
            </Link>  
        </Card>
      </div>
    
  );
}

export default Vagas;