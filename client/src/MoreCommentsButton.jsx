import React from 'react';

const styleCommentsButton = {
    marginLeft: '100px'
} 

class MoreCommentsButton extends React.Component {
    constructor(props){
        super(props);
    }

    render(){


        if(!this.props.commentsButtonClicked){
            return(<button className="commentsButton" onClick={this.props.buttonClick} style={styleCommentsButton}>More Comments</button>);
        } else {
            return (<button className="commentsButton" onClick={this.props.buttonClick} style={styleCommentsButton}>Shrink Comments</button>);
        } 
    }
}

export default MoreCommentsButton;
