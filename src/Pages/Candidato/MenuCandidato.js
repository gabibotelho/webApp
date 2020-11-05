import React, {useState} from 'react';
import { Menu, Modal } from 'antd';
import Logo from '../logo.png';
import { MailOutlined,  UserOutlined, HomeOutlined, FilePdfOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';

const { SubMenu } = Menu;

function CustomMenu({selectedKey}) {
    const history = useHistory();
    const [visible, setVisible] = useState(false);

    const handleOk = e => {
        history.push('/login_candidato');
    };
    return (
        <Menu mode="horizontal" selectedKeys={[selectedKey]} style={{backgroundColor:"lightgray"}}>
            <img src={Logo} style={{width:45}}/>
            <Menu.Item key="home_candidato" icon={<HomeOutlined />}>
                <Link to="home_candidato">
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item key="apply_candidato" icon={<FilePdfOutlined />}>
                <Link to="apply_candidato">
                    Aplicadas
                </Link>
            </Menu.Item>
            <SubMenu style={{float: 'right'}} key="SubMenu" title={<UserOutlined style={{fontSize: 20, marginRight: 0}} />}>
                <Menu.ItemGroup title="Perfil">
                    <Menu.Item key="perfil">
                        <Link to="/perfil">
                            Editar perfil
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="curriculo">
                        <Link to="/curriculo">
                            Editar currículo
                        </Link>
                    </Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Conta">
                    <Menu.Item key="excluir" onClick={()=>setVisible(true)}>
                        Excluir conta
                        <Modal
                            title="Excluir conta"
                            visible={visible}
                            onOk={handleOk}
                            onCancel={()=>setVisible(false)}
                        >
                            <p>Deseja mesmo excluir sua conta?</p>
                        </Modal>
                    </Menu.Item>
                    <Menu.Item key="sair">
                        <Link to="/login_candidato">
                            Sair dessa conta
                        </Link> 
                    </Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>
    );
}

export default CustomMenu;