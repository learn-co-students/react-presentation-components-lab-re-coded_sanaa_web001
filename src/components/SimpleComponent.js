// Code SimpleComponent Here

import React, { Component } from 'react';

class SimpleComponent extends Component{

    constructor(){
        super()
        this.state={
            mood:undefined
        }
    }
    componentDidMount(){
        this.setState(({mood:"happy"}))
    }
    clickHandler=()=>{
        if(this.state.mood=="happy")
        this.setState(({mood:'sad'}))
        else
        this.setState(({mood:"happy"}))
    }
    render(){
        return(
            <div onClick={this.clickHandler}>
           {this.state.mood}
        </div>
        )
    }
}

export default SimpleComponent;