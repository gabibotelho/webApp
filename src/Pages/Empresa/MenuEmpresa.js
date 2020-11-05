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
        history.push('/login_empresa');
    };
    return (
        <Menu mode="horizontal" selectedKeys={[selectedKey]} style={{backgroundColor:"lightgray"}}>
            <img src={Logo} style={{width:45}}/>
            <Menu.Item key="home_empresa" icon={<HomeOutlined />}>
                <Link to="home_empresa">
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item key="apply_empresa" icon={<FilePdfOutlined />}>
                <Link to="apply_empresa">
                    Ofertadas
                </Link>
            </Menu.Item>
            <SubMenu style={{float: 'right'}} key="SubMenu" title={<UserOutlined style={{fontSize: 20, marginRight: 0}} />}>
                    <Menu.Item key="vagas">
                        <Link to="/vagas">
                            Editar vagas
                        </Link>
                    </Menu.Item>
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
                        <Link to="/login_empresa">
                            Sair dessa conta
                        </Link> 
                    </Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default CustomMenu;