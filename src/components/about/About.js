import React, {Component} from 'react'
import { Calendar } from 'antd';


class About extends Component {
    onPanelChange=(e)=>{

    };
    render () {
        return (
            <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 ,}}>
                <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
            </div>
        )
    }
}

export default About