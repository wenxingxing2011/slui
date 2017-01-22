import React from 'react';
import { connect } from 'dva';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/about/About'
import { Layout} from 'antd';

function SysPage() {
  return (
    <Layout>
      <Header/>
        <About/>
      <Footer/>
    </Layout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(SysPage);
