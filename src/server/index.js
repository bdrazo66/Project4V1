// Setup empty JS object to act as endpoint for all routes
projectData = {};
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')


// Start up an instance of app
const app = express()

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.static('dist'))

// now we have to create our midlewaree
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

console.log(__dirname)

app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8585, function() {
    console.log('Example app listening on port 8585!')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})


app.get('/g', (req, res) => {


    //res.json({ message: 'success', feeling: 'good' }); //to check

    res.send(projectData);
    //console.log(projectData); //to check
})

app.post('/a', (req, res) => {




    const t = req.body.t;
    const f = req.body.f;
    const g = req.body.g;

    projectData = { TEXT: t, Confidence: f, Agree: g };


    console.log(req.body);

    projectData = req.body;
    res.send(projectData);



});