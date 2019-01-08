import React from 'react';
import ReactDOM from 'react-dom';

const buttonStyle = {
    display: 'block'
}

class InputBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <form>
                <textarea rows="3" cols="60" placeholder="Leave a Comment!" onChange={this.props.onChange} type="text" name="firstname"></textarea>
                <button style={buttonStyle} onClick={this.props.onClick}>Comment</button>
            </form>
        )
    }
}

export default InputBar;
