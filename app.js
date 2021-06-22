const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Person = require('./models/person');
const faker = require('faker');

const dbURI = 'mongodb+srv://reymart:detramier22@cluster0.y61bu.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((results)=>app.listen(5000, (req, res)=>{
        console.log("app is listening on port 5000....");
    }))
    .catch((err)=>console.log(err))



app.get('/api/persons',(req, res)=>{
    Person.find()
        .then(results => {
            const newResults = results.map((results)=>{
                const {id, firstname, lastname, city} = results
                return {id, firstname, lastname, city}
            })
            res.json(newResults);
        })
        .catch(err =>{
            console.log(err);
        })  
})

app.get('/api/persons/:id', (req, res)=>{
    let id = req.params.id;
    Person.findById(id)
    .then(results => res.json(results))
    .catch(err=>res.status(404).send('404 Not found'));
})