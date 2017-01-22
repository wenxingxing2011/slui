import React from 'react';
import { connect } from 'dva';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SysConfig from '../components/s01/Sysconfig'
import { Layout} from 'antd';

function SysPage() {
  return (
    <Layout>
      <Header/>
        <SysConfig/>
      <Footer/>
    </Layout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(SysPage);
