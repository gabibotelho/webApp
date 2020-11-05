import React, { useEffect, useState } from 'react';
import Menu from '../Candidato/MenuCandidato';
import { Upload, message, Radio } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { curriculogabi }  from './curriculo_base64';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function Curriculo() {
  const [tipo, setTipo] = useState("visualizar");
  const onChangeButton = (e)=>{
    setTipo(e.target.value)
  }


  return (
    <div>
      <div>
          <Menu selectedKey="curriculo" />
      </div>
      <div style={{padding: 10}}>
      <Radio.Group onChange={onChangeButton} value={tipo} defaultValue="visualizar" buttonStyle="solid">
        <Radio.Button value="visualizar">Visualizar</Radio.Button>
        <Radio.Button value="adicionar">Adicionar</Radio.Button>
      </Radio.Group>
      { tipo === "adicionar" ? 
        <div>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from uploading company data or other
              band files
            </p>
          </Dragger>,
        </div>
        : 
          <embed src={`data:application/pdf;base64,${curriculogabi}`} width="100%" height="500" type="application/pdf"></embed>
      }
      </div>
    </div>

  );
}

export default Curriculo;