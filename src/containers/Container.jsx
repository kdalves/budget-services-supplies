import React, { Component } from 'react';
import Box from '../components/commons/Box.js';
import avatar from '../assets/images/eu.png'; 

class Container extends Component {
   render(){ 
    return(
        <div className="w3-display-middle">
            <Box  name="Kath" rating="63" status="Finalizado" avatar={avatar} serviceDone="51 negócios fechados" price="RS 200,00" hired="false"/>
        </div>
    );
   }
}

export default Container;