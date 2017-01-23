import React, {Component} from 'react'
import { Dropdown,Menu,Layout ,Input,Radio ,Card ,Button} from 'antd';
const { Header, Footer, Content } = Layout;

class UserDefine extends Component {
        handleButtonClick=(e)=>{

            console.log('click left button', e);
        };
        handleMenuClick=(e) => {

            console.log('click', e);
        };
        render () {
            const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">CS</Menu.Item>
                <Menu.Item key="2">CRC8</Menu.Item>
                <Menu.Item key="3">CRC16</Menu.Item>
                <Menu.Item key="4">CRC32</Menu.Item>
            </Menu>
            );

        return (
            <Layout>
                <Content>
                <Radio defaultChecked ='true'>HEX</Radio> 
                <Radio >ASSIC</Radio> 
                <Input type="textarea" rows={10} />
                <br/> <br/> 
                <Radio defaultChecked ='true'>HEX</Radio> 
                <Radio >ASSIC</Radio> 
                <Dropdown.Button onClick={this.handleButtonClick} overlay={menu} type="ghost">
                  CRC
                </Dropdown.Button>
                <Button style={{  marginRight: '10' }}>发送</Button>
                <Input type="textarea" rows={2} />
                </Content>
                <Footer>
                    
                </Footer>
            </Layout>
        )
    }
}

export default UserDefine