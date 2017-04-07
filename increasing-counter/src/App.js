import React, { Component } from 'react';
var ativo;
class IncreasingCounter extends Component {
	
	constructor(props){
		super();
		ativo = props.ativo;
		this.state = {
			valorInicial: props.valorInicial,
		}
	}
	
	IncreasingCounter(valor){
		if(ativo)
		this.setState({
			valorInicial	: this.state.valorInicial + valor,
		})
		else
			this.setState({
			valorInicial	: 0,
		})
	}
	render() {
    return ( 
        <div onClick={this.IncreasingCounter.bind(this,1)}>{this.state.valorInicial}</div>
		
    );
  }
}

export default IncreasingCounter;
