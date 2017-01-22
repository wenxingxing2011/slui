import React, {Component} from 'react'
import { Layout ,Input,Radio ,Card } from 'antd';
const { Header, Footer, Content } = Layout;

class UserDefine extends Component {
    render () {
        return (
            <Layout>
                <Content>
                <Radio defaultChecked ='true'>HEX</Radio> 
                <Radio >ASSIC</Radio> 
                
                <Input type="textarea" rows={10} />
                <hr/>
                
                </Content>
    
            </Layout>
        )
    }
}

export default UserDefine