import React from 'react';

const commentStyle = {
    width: '50%',
    marginLeft: '100px',
    display: 'block',
    borderStyle: 'solid'
}

const styleUsername = {
    fontWeight:'bold',
    fontSize:'1em' 
} 

const styleTimestamp = {
    fontWeight: 'normal',
    fontSize: '0.8em' 
}  

class Comment extends React.Component{
    constructor(props){
        super(props);
    }

    

    render(){

        let time=new Date(this.props.commentObj.times).toString();

        return (
        <div className="comment" style={commentStyle}>
            {/* <div>id: {this.props.commentObj.id}</div> */}
            {/* <div>project_id: {this.props.commentObj.project_id}</div> */}
            <div className="username" style={styleUsername}>{this.props.commentObj.username}:</div>
            <div className="message">==>{this.props.commentObj.comment}</div>
            <div className="timestamp" style={styleTimestamp}>Posted:{time}</div>
        </div>
        
        );
    }
}
export default Comment;