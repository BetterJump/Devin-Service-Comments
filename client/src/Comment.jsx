import React from 'react';

class Comment extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div className="comment">
            <div>id: {this.props.commentObj.id}</div>
            <div>project_id: {this.props.commentObj.project_id}</div>
            <div>userName: {this.props.commentObj.username}</div>
            <div>comment: {this.props.commentObj.comment}</div>
            <div>times: {this.props.commentObj.times}</div>
        </div>
        
        );
    }
}
export default Comment;