import React from 'react';
import { Layout, Menu, Breadcrumb, Icon ,Switch } from 'antd';
import UserDefine from './func/UserDefine'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


function Dcontent() {
  return (
   <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '12px 0' }} separator="→">
      <Breadcrumb.Item>当前连接</Breadcrumb.Item>
        <Breadcrumb.Item>串口</Breadcrumb.Item>
        <Breadcrumb.Item>COM1</Breadcrumb.Item>
        <Breadcrumb.Item><Switch /></Breadcrumb.Item>
      </Breadcrumb>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1',]}
          >
            <SubMenu key="sub1" title={<span><Icon type="user" />调试</span>}>
              <Menu.Item key="1">自拟</Menu.Item>
              <Menu.Item key="2">测试</Menu.Item>
              <Menu.Item key="3">表库</Menu.Item>
              <Menu.Item key="4">流程</Menu.Item>
              <Menu.Item key="5">升级</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" />解析</span>}>
              <Menu.Item key="6">dl645</Menu.Item>
              <Menu.Item key="7">376.2</Menu.Item>
              <Menu.Item key="8">376.1</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <UserDefine/>
        </Content>
      </Layout>
    </Content>
  );
}

export default Dcontent;
