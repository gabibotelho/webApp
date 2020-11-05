import { Input, Card, Button } from 'antd';
import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import Logo from '../logo.png';
// import { Container } from './styles';


function LoginEmpresa() {
    const history = useHistory();


    const login = () => {
        history.push('/home_empresa');
    }
    return (
        <div style={{background: '#ececec', minHeight: '100vh', paddingTop: 30  }}>
            <Card style={{ width: 300, margin: 'auto', textAlign: 'center'}}>
                <img src={Logo} style={{width:45}}/>
                <h3>Login Empresa</h3>
                <br />
                <div>Email</div>
                <Input />
                <div>Senha</div>
                <Input />
                <br />
                <br />
                <a href="/cadastro">Cadastre-se</a>
                <br />
                <br />
                <Button onClick={login}>Entrar</Button>
            </Card>
        </div>
);
}

export default LoginEmpresa;