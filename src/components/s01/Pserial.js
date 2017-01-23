import React, {Component} from 'react'
import { Menu, Dropdown, Button, Icon, message } from 'antd';
class Pserial extends Component {

    handleButtonClick=(e) => {
    message.info('Click on left button.');
        console.log('click left button', e);
    };
    handleMenuClick=(e) => {

            console.log('click', e);
        };
    render () {

       const menu = (
                <Menu onClick={this.handleMenuClick}>
                    <Menu.Item key="1">1st menu item</Menu.Item>
                    <Menu.Item key="2">2nd menu item</Menu.Item>
                    <Menu.Item key="3">3d menu item</Menu.Item>
                </Menu>
                );
        return (
            <div>
                <div  style={{ padding: '5px 10px' }}>
                    端口号： 
                    <Dropdown.Button onClick={this.handleButtonClick} overlay={menu} type="ghost">
                        COM1
                    </Dropdown.Button>
                </div>
                 <div  style={{ padding: '5px 10px' }} >
                    波特率： 
                    <Dropdown.Button  onClick={this.handleButtonClick} overlay={menu} type="ghost">
                        9600bps
                    </Dropdown.Button>
                </div>
                <div  style={{ padding: '5px 10px' }}>
                    校验位： 
                    <Dropdown.Button onClick={this.handleButtonClick} overlay={menu} type="ghost">
                        8-N-1
                    </Dropdown.Button>
                </div>
                <div  style={{ padding: '5px 10px' }}>
                <Button  size = 'large'>打开端口</Button>
                </div>
            </div>
        )
    }
}

export default Pserial