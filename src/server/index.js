// Setup empty JS object to act as endpoint for all routes
projectData = {};
texts = {}; // to save text that comes from users
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')


const dotenv = require('dotenv');
dotenv.config();


const fetch = require('node-fetch');



// Start up an instance of app
const app = express()

const cors = require('cors');
const bodyParser = require('body-parser');
const { words } = require('lodash');

app.use(express.static('dist'))

// now we have to create our midlewaree
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

console.log(__dirname)

app.get('/', function(req, res) {

    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8585, function() {
    console.log('Example app listening on port 8585!')
    console.log(`Your API key is ${process.env.apiKey}`);

})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})


app.get('/g', (req, res) => {


        //res.json({ message: 'success', feeling: 'good' }); //to check

        res.send(projectData);
        //console.log(projectData); //to check
    })
    // old code start

app.post('/a', (req, res) => {




    const tt = req.body.word;

    texts = { word: tt }

    console.log(tt);
    texts = req.body;
    console.log(req.body);






    const url = `https://api.meaningcloud.com/sentiment-2.1?key=` + process.env.apiKey + `&of=json&txt=` + tt + `&model=general%20&lang=en`;
    console.log(url);


    fetch(url)
        .then(response => response.json())
        .then(data => {




            const f = data.confidence
            console.log(f);



            const g = data.agreement
            console.log(g);

            projectData = { TEXT: tt, Confidence: f, Agree: g }
            console.log(projectData);
            res.send(projectData);


        })
        .catch(err => console.log("error from fetch node"))


});