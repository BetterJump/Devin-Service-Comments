import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Comment from './Comment.jsx';
import InputBar from './InputBar.jsx';
import MoreCommentsButton from './MoreCommentsButton.jsx';
   
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            commentsList: [],
            newComment: '',
            currentProject_id: 2,
            commentsButtonClicked:false
        }

    }

    componentDidMount(){
        const self = this;
        axios.get('/Comments/:ID',{
            params:{
                ID: self.state.currentProject_id
            }
        })
        .then(function (response) {
          self.setState({
              commentsList: response.data
          })
          console.log(self.state);
          })
        .catch(function (error) {
          console.log(error);
        });   
    }

    onChange(e){
        console.log(this.state);
        e.preventDefault();
        this.setState({
            newComment: e.target.value
        })
    }
    
    onClick(e){
        e.preventDefault();
        const self = this;

        axios.post('/Comments', {
            newComment: this.state.newComment,
            currentProject_id: this.state.currentProject_id
        })
        .then(function (response) {
            console.log(response);
            self.setState({
                commentsList:response.data
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    buttonClick(e){
        e.preventDefault();
        this.setState({
            commentsButtonClicked: !this.state.commentsButtonClicked
        })
    }




    render(){


    if(this.state.commentsButtonClicked){
        const CommentsShown = this.state.commentsList.length; //all comments shown 
    } else {
        const CommentsShown = Math.floor(this.state.commentsList.length*(0.4)); //40% of comments shown
    }

        return (
        <div>
            <div className="input">
                <InputBar onChange={this.onChange.bind(this)} onClick={this.onClick.bind(this)}/>
            </div>

            <div className="ouput">Comments:
                { (this.state.commentsButtonClicked)?
                    this.state.commentsList.slice(0,this.state.commentsList.length).map( (item)=>{
                        return <Comment commentObj={item}/>
                    }):
                    this.state.commentsList.slice(0,Math.floor(this.state.commentsList.length*(0.4))).map( (item)=>{
                        return <Comment commentObj={item}/>
                    })
                }                
             </div>
             <div className="button">
                    <MoreCommentsButton commentsButtonClicked={this.state.commentsButtonClicked} buttonClick={this.buttonClick.bind(this)}/>
             </div>
        </div>
        
        );
    }
}

// ReactDOM.render( <App/>,document.getElementById('App'));

export default App;