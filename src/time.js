import React from 'react';

function Yourscore(props){
    if(props.s >= 60 && props.s <= 100 ){
        return <p>😝You Pass the test!!!😝</p>;
    }
    else if(props.s >= 0 && props.s < 60 ){
        return <p>😤You need to work hard!!!😤</p>;
    }
    else{
        return <p>😓Re-enter😓</p>;
    }
}
function Yourgrade(props){
    if(props.sc >= 90 && props.sc <= 100 ){
        return <p>You get A !!!</p>;
    }
    else if(props.sc >= 80 && props.sc < 90 ){
        return <p>You get B !!!</p>;
    }
    else if(props.sc >= 70 && props.sc < 80 ){
        return <p>You get C !!!</p>;
    }
    else if(props.sc >= 60 && props.sc < 70 ){
        return <p>You get D !!!</p>;
    }
    else if(props.sc >= 0 && props.sc < 60 ){
        return <p>You get F !!!</p>;
    }
    else{
        return <p>You enter error value</p>;
    }
}
class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {score: ''}
    }

    handleChange(e){
        this.setState({score: e.target.value});
    }
    
    render() {
        const score = this.state.score;
        return (
            <fieldset>
                <legend><h2>Pass or Fail</h2></legend>
                <h1>😎Enter your score😎</h1>
                <input 
                    value = {score} 
                    onChange={this.handleChange}/>
                <Yourscore 
                    s={parseFloat(score)}/>
                <Yourgrade 
                    sc={parseFloat(score)}/>
            </fieldset>
        );
    }
}

export default Calculator;
