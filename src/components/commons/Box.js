import React, { Component } from 'react';
import '../../assets/index.css';
//import {getList} from '../../services/serviceQuotes';

class Box extends Component {
    state={
        star:3,
    }
    stars = () => {
        let i = 0;
        let stars=[];
        for(i; i < this.state.star; i++){  
            stars.push(<span className="fa fa-star star"></span>)
        }
        return stars
    }
   render(){ 
    const {status, name, avatar, serviceDone, rating, price, hired} = this.props;

    return(
        <div>
            <div className="container size-box">   
                {!status&&<div className="row">
                    <button>{status}</button>
                </div>}
                <div className="row middle-box">
                    <div className="col"><img src={avatar} alt={name} className="img-box rounded-circle img-fluid"/></div>
                    <div className="col">
                        <div className="title-box">{name}</div>
                        <div className="text-info-box">{this.stars()}({rating})</div>
                        <div className="text-info-box">{serviceDone}</div>
                        <div className="text-price-box">{price}</div>
                    </div>
                </div>   
                <div className="line-grey"/>
                {hired&&<div className="link-orange"><span>CONTRATAR</span></div>}           
            </div>
        </div>
    );
   }
}

export default Box;