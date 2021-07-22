import React from 'react';

function Yourscore(props){
    if(props.s >= 60 && props.s <= 100 ){
        return <p>😝You Pass the test!!!😝</p>;
    }
    else if(props.s >= 0 && props.s < 60 ){
        return <p>😤You need towork hard!!!😤</p>;
    }
    else{
        return <p>😓Re-enter😓</p>;
    }
    // return <p>輸入你的成績</p>;
}
function Yourgrade(props){
    if(props.s >= 90 && props.s <= 100 ){
        return <p>You get A !!!</p>;
    }
    else if(props.s >= 80 && props.s < 90 ){
        return <p>You get B !!!</p>;
    }
    else if(props.s >= 70 && props.s < 80 ){
        return <p>You get C !!!</p>;
    }
    else if(props.s >= 60 && props.s < 70 ){
        return <p>You get D !!!</p>;
    }
    else{
        return <p>You get F !!!</p>;
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
                    s={parseFloat(score)}/>
            </fieldset>
        );
    }
}

export default Calculator;
