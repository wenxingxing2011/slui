import React, {Component} from 'react'
import { Layout, Menu ,Tabs,Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const TabPane = Tabs.TabPane;
import Pnet from './Pnet';
import Pserial from './Pserial';
class componentName extends Component {
    callback=(key)=> {
    console.log(key);
    };

    render () {
        return (
            <Content style={{ padding: '0 50px' }}>
 
              <Layout style={{ padding: '0 0', background: '#fff' }}>  
  
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                
                      <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="串口" key="1"><Pserial/></TabPane>
                        <TabPane tab="网络" key="2"><Pnet/></TabPane>
                    </Tabs>
                    
                </Content>
             </Layout>
            </Content>
        )
    }
}

export default componentName