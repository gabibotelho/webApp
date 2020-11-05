import Menu from './MenuCandidato';
import React, { useState } from 'react';
import { Input, Col, Row, Select, Button, Modal, Card } from 'antd'
import Form from 'antd/lib/form/Form';
import { vagas } from './fixturesCandidato';

const { Search } = Input;
const { Option } = Select;

function HomeCandidato() {
    const [visible, setVisible] = useState(false);

    const handleOk = e => {
        console.log(e);
        setVisible(false);
    };

    const [tipo, setTipo] = useState("Presencial"); 
    const onSearch = value => console.log(value);
    return (
        <div>
        <div>
            <Menu selectedKey="home_candidato" />
        </div>
            <div style={{padding:20}}>
                <Form>
                    <Row style={{marginBottom:10}} gutter={15}>
                        <Col span={12}>
                            <label>Tipo:</label>
                            <br/>
                            <Select onChange={(value)=>{setTipo(value)}} value={tipo} style={{width:"100%"}} defaultValue="Selecione">
                                <Option value="Remoto">Remoto</Option>
                                <Option value="Presencial">Presencial</Option>
                            </Select>
                        </Col>
                        <Col span={12}>
                            { tipo === "Presencial" ? 
                                <div>
                                    <label>Cidade:</label>
                                    <br/>
                                    <Select style={{width:"100%"}} defaultValue="Selecione">
                                        <Option value="Bandeirantes">Bandeirantes</Option>
                                        <Option value="Assis">Assis</Option>
                                        <Option value="Cornelio">Cornélio Procópio</Option>
                                        <Option value="Londrina">Londrina</Option>
                                    </Select>
                                </div> 
                            : null }
                        </Col>
                    </Row>
                    < Search placeholder="Palavra-chave (linguagem, cargo, etc)" onSearch={onSearch} enterButton/>
                </Form>
                <div style={{marginTop:30}}>
                    {
                        vagas.map((vaga)=>(
                            <Card size="small" title={vaga.nome} style={{ width: 300 }} style={{marginBottom:15}}>
                                <p>{vaga.empresa}</p>
                                <p>R${vaga.salario}</p>
                                <p>{vaga.descricao}</p>

                                <Button type="primary" onClick={()=>setVisible(true)}>
                                    Cadastre-se
                                </Button>
                                <Modal
                                    title="Basic Modal"
                                    visible={visible}
                                    onOk={handleOk}
                                    onCancel={()=>setVisible(false)}
                                >
                                    <p>Deseja enviar seu currículo para essa empresa?</p>
                                </Modal>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default HomeCandidato;