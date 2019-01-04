import React from 'react';
import ReactDOM from 'react-dom';

class InputBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <form>
                <textarea rows="6" cols="70" onChange={this.props.onChange} type="text" name="firstname"></textarea>
                <button onClick={this.props.onClick}>Comment</button>
            </form>
        )
    }
}

export default InputBar;
