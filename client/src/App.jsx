import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Comment from './Comment.jsx';
import InputBar from './InputBar.jsx';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            commentsList: [],
            newComment: '',
            currentProject_id: 2
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


    render(){
        return (
        <div>
            <div className="input">Input Bar:
                <InputBar onChange={this.onChange.bind(this)} onClick={this.onClick.bind(this)}/>
            </div>

            <div className="ouput">Existing Comments
                {this.state.commentsList.map( (item)=>{
                    return <Comment commentObj={item}/>
                })
                }
                
             </div>
        </div>
        
        );
    }
}

ReactDOM.render( <App/>,document.getElementById('App'));

export default App;