import Menu from './MenuEmpresa';
import React, { useState } from 'react';
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader, Card } from 'antd'
import Form from 'antd/lib/form/Form';
import { candidatos } from './fixturesEmpresa';

const { Search } = Input;
const { Option } = Select;

function HomeEmpresa() {
    const onSearch = value => console.log(value);
    return (
        <div>
        <div>
            <Menu selectedKey="home_empresa" />
        </div>
            <div style={{padding:20}}>
                <Form>
                    < Search placeholder="Palavra-chave (linguagem, idade, etc)" onSearch={onSearch} enterButton/>
                </Form>
                <div style={{marginTop:30}}>
                    {
                        candidatos.map((candidato)=>(
                            <Card size="small" title={candidato.nome} style={{ width: 300 }} style={{marginBottom:15}}>
                                <p>Idade: {candidato.idade}</p>
                                <p>Anos de experiência: {candidato.experiencia}</p>
                                <p>Habilidades: {candidato.habilidades}</p>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default HomeEmpresa;