import React, {Component} from 'react'
import { Button, Input , message } from 'antd';

class Pnet extends Component {
    render () {
        return (
            <div>
                <div  style={{ padding: '5px 5px' }}>
                    端口号：<Input style={{width: '80px'}} placeholder="8989" ></Input>
                </div>
                 <div  style={{ padding: '5px 5px' }}>
                    IP地址：<Input style={{width: '80px'}} placeholder="127.0.0.1" ></Input>
                </div>
                <Button  size = 'large'>打开端口</Button>

            </div>
        )
    }
}

export default Pnet