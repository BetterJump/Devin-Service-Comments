const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
// const db = require('./db/index.js');
const knex = require('./db/knex.js');
const Promise = require("bluebird");

app.use(express.static('./client/dist'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/Comments/:ID', (req, res) => {
  console.log('HERE');

  knex.where('project_id',req.query.ID).select().from('comments_info')
  .then( (rows)=>{res.send(rows)})
  .catch( (err)=>{console.log(err)});
        
});

app.post('/Comments', (req, res) => {

  console.log('RECIEVED IN SERVER',req.body);
  let currentProject_id = req.body.currentProject_id;
  let newComment = req.body.newComment;

  console.log('Pre-Knex');
  knex('comments_info').insert({project_id:currentProject_id,username:'TestUser',comment:newComment})
  .then( ()=>{
    knex.where('project_id',currentProject_id).select().from('comments_info')
    .then( (rows)=>{res.send(rows)})
    .catch( (err)=>{console.log(err)});
  })
  .catch( (err)=>{console.log(err)})
  console.log('Post-Knex');

  
  //[{project_id:currentProject_id},{userName: 'Devin Krok'},{comment:newComment}
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))