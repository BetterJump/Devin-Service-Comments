import React from 'react';
import ReactDOM from 'react-dom';

class InputBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <form>
                <input onChange={this.props.onChange} type="text" name="firstname"/>
                <button onClick={this.props.onClick}>Comment</button>
            </form>
        )
    }
}

export default InputBar;
