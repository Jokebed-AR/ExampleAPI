//Importing packages
const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

//Using packages
const app = express();

//Set port for Heroku
let port = process.env.PORT || 8080

//Middleware to read json objets
app.use(express.json())
app.use(morgan('dev'))

//POST Routes 
app.post('/dice/:num', (req, res ) => {
    const URL = `https://www.api.toys/api/dice_roll/${req.params.num}`;

    console.log(req);
    aux = req;
    res.send(`Showing result...`);

    axios.post(URL,{
        data:{
            "dice": "d6",
            "rolls": [
              1
            ]
        }
    },{
        headers: {
            'content-type': 'application/json'
        }
    })
    
})

app.post('/coin/:flip', (req, res ) => {
    const URL = `https://www.api.toys/api/coin_flip/${req.params.flip}`;

    console.log(req);
    aux = req;
    res.send(`Received!`);

    axios.post(URL,{
        data:{
                "result": "heads"
        }
    },{
        headers: {
            'content-type': 'application/json'
        }
    })
    
})

app.post('/syllables/:random', (req, res ) => {
    const URL = `https://www.api.toys/api/random_syllables/${req.params.random}`;

    console.log(req);
    aux = req;
    res.send(`Ok`);

    axios.post(URL,{
        data:{
            "words": [
                "Selfilyoh",
                "Sorwuff",
                "Catpthrizvue",
                "Nuxhidfur",
                "Qixpupmez",
                "Mir+Herkunhov%27koxfei",
                "Yen+Xeffcagsedtogg",
                "Cujsoj",
                "Viw",
                "Pemputhdew"
              ]
        }
    },{
        headers: {
            'content-type': 'application/json'
        }
    })
    
})

app.post('/worm/:number', (req, res ) => {
    const URL = `https://www.api.toys/api/worm_name/${req.params.number}`;

    console.log(req);
    aux = req;
    res.send(`Worm name received!`);

    axios.post(URL,{
        data:{
            "results": [
                "Joshie"
              ]
        }
    },{
        headers: {
            'content-type': 'application/json'
        }
    })
    
})

app.post('/countdown/:ana', (req, res ) => {
    const URL = `https://www.api.toys/api/countdown_anagram/${req.params.ana}`;

    console.log(req);
    aux = req;
    res.send(`Working well!`);

    axios.post(URL,{
        data:{
            "anagram": "HEARTCORS",
            "answers": [
            "CARTHORSE",
            "ORCHESTRA"
  ]
        }
    },{
        headers: {
            'content-type': 'application/json'
        }
    })
    
})

//Testing for axios API
app.get('/marvel', (req, res) => {
    const END_POINT = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=7a6670e04402e4f3097475f3b61f99b2&hash=0dd5aa88e004d72ffecf60e3ee4d4f5a';

    axios.get(END_POINT)
    .then(function(response) {
        console.log(response.data)
        res.send(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.send(error);
    });
})


app.get('/marvel/:id', (req, res) => {
    const END_POINT = `https://gateway.marvel.com:443/v1/public/characters/${req.params.id}?ts=1&apikey=7a6670e04402e4f3097475f3b61f99b2&hash=0dd5aa88e004d72ffecf60e3ee4d4f5a`;

    axios.get(END_POINT)
    .then(function(response) {
        console.log(response.data)
        res.send(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.send(error);
    });
})


app.get('/marvel/comics/:comicid', (req, res) => {
    const END_POINT = `https://gateway.marvel.com:443/v1/public/comics/${req.params.comicid}?ts=1&apikey=7a6670e04402e4f3097475f3b61f99b2&hash=0dd5aa88e004d72ffecf60e3ee4d4f5a`;

    axios.get(END_POINT)
    .then(function(response) {
        console.log(response.data)
        res.send(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.send(error);
    });
})


app.get('/marvel/stories/:storyid', (req, res) => {
    const END_POINT = `https://gateway.marvel.com:443/v1/public/comics/${req.params.storyid}?ts=1&apikey=7a6670e04402e4f3097475f3b61f99b2&hash=0dd5aa88e004d72ffecf60e3ee4d4f5a`;

    axios.get(END_POINT)
    .then(function(response) {
        console.log(response.data)
        res.send(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.send(error);
    });
})


app.get('/marvel/series/:serieid', (req, res) => {
    const END_POINT = `https://gateway.marvel.com:443/v1/public/series/${req.params.serieid}?ts=1&apikey=7a6670e04402e4f3097475f3b61f99b2&hash=0dd5aa88e004d72ffecf60e3ee4d4f5a`;

    axios.get(END_POINT)
    .then(function(response) {
        console.log(response.data)
        res.send(response.data)
    })
    .catch(function (error) {
        console.log(error);
        res.send(error);
    });
})


//Listen Server
app.listen(port, () =>{
    console.log("Server running on port");
})

