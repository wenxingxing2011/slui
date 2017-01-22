import React ,{PropTypes}from 'react';
import { connect } from 'dva';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/Content';

import { Layout} from 'antd';

const IndexPage =()=>{
  return (
    <Layout>
      <Header/>
      <Content/>
      <Footer/>
    </Layout>
  )
}

IndexPage.propTypes = {
    
};

export default connect()(IndexPage);
