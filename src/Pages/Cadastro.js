import React, { useState } from 'react';
import { Input, Card, Button, Radio } from 'antd';
import Logo from './logo.png';
import { useHistory } from 'react-router-dom';

// import { Container } from './styles';

function Cadastro() {
    const history = useHistory();

    const cadastroCandidato = () => {
        history.push('/login_candidato');
    }
    const cadastroEmpresa = () => {
        history.push('/login_empresa');
    }

    const [tipo, setTipo] = useState(""); 
    const onChangeButton = (e)=>{
        setTipo(e.target.value)
      }

    return (
        <div>
            <Card style={{ width: 300, margin: '70px auto', textAlign: 'center'}}>
                    <img src={Logo} style={{width:45}}/>
                    <h3>Cadastro</h3>
                    <br />
                    <Radio.Group onChange={onChangeButton} value={tipo}>
                        <Radio value="empresa">Empresa</Radio>
                        <Radio value="candidato">Candidato</Radio>
                    </Radio.Group>
                    { tipo === "candidato" ? 
                        <div style={{marginTop:40}}>
                            <div>Nome</div>
                            <Input />
                            <div>E-mail</div>
                            <Input />
                            <div>Escolha uma senha</div>
                            <Input />
                            <br />
                            <br />
                            <Button onClick={cadastroCandidato}>Entrar</Button>
                        </div>
                    : null }
                    { tipo === "empresa" ?
                        <div style={{marginTop:40}}>
                                <div>Nome da Empresa</div>
                                <Input />
                                <div>E-mail corporativo</div>
                                <Input />
                                <div>Escolha uma senha</div>
                                <Input />
                                <br />
                                <br />
                                <Button onClick={cadastroEmpresa}>Entrar</Button>
                            </div>
                    : null }
                </Card>
        </div>
    );
}

export default Cadastro;