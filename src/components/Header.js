import React from 'react';
import  {Layout,Menu} from 'antd';
import { Link } from 'dva/router';

const { Header } = Layout;

function Dheader() {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to='/SysPage'>系统设置</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/'>功能列表</Link></Menu.Item>
        <Menu.Item key="3"><Link to='/About'>关于帮助</Link></Menu.Item>
      </Menu>
    </Header>
  );
}

export default Dheader;
