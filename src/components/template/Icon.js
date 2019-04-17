import React, { Component } from 'react';
import logo from '../../../src/triider.png'
class Icon extends Component{
    render(){
        return(
            <div>
                <img alt="triider logo" height="30em" width="120em" src={logo}/>
            </div>
        );
    }
}

export default Icon;