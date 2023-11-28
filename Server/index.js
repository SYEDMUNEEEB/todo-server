const express = require('express')
const mongoose= require ('mongoose')
const TodoItemRoute = require('./routes/todoItems');
const dotenv=require('dotenv').config()
const cors=require('cors')
const app=express()
app.use(express.json())
const PORT = process.env.PORT || 5500;

//use cors
app.use(cors());
//connect to mongodb ..
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch(err => console.error("Error connecting to database:", err));


  app.use('/', TodoItemRoute);
//connect to server
app.listen(PORT, ()=> console.log("Server connected") );
app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})