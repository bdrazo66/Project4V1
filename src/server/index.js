// Setup empty JS object to act as endpoint for all routes
projectData = {};
texts = {};
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')


const dotenv = require('dotenv');
dotenv.config();

//setup Api to fetch by server

/*var aylien = require("aylien_textapi");

var textapi = new aylien({
    //application_id: "your-api-id",
    application_id: process.env.application_id,
    //application_key: "your-key"
    application_key: process.env.application_key
});

const result = textapi.sentiment({
    'text': 'John is a very good football player!'
}, function(error, response) {
    if (error === null) {
        console.log(response);
    }
});*/


// Endpoint :  https://api.aylien.com/news

// end of fetching by server

//const axios = require('axios');
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
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8585, function() {
    console.log('Example app listening on port 8585!')
    console.log(`Your API key is ${process.env.apiKey}`);
    //console.log(textapi);
    //console.log(result);
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
    //const f = req.body.f;
    //const g = req.body.g;
    texts = { word: tt }
        //console.log(words);
        //console.log(word);
    console.log(tt);
    texts = req.body;
    console.log(req.body);

    //projectData = { TEXT: t, Confidence: f, Agree: g };


    //console.log(req.body);

    //projectData = req.body;
    //res.send(projectData);


    // trying by using node fetch(start)
    //let formText = document.getElementById('name').value

    const url = `https://api.meaningcloud.com/sentiment-2.1?key=` + process.env.apiKey + `&of=json&txt=` + tt + `&model=general%20&lang=en`;
    console.log(url);


    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data)
            //const t = data.sentence_list[0].text
            //console.log(words[0]);



            const f = data.confidence
            console.log(f);



            const g = data.agreement
            console.log(g);

            projectData = { TEXT: tt, Confidence: f, Agree: g }
            console.log(projectData);
            res.send(projectData);


        })
        .catch(err => console.log("error from fetch node"))

    // trying by using node fetch(End)




    //old code end


    // to set up axios



    /* async function makeRequest() {

            const config = {
                method: 'get',
                url: `https://api.meaningcloud.com/sentiment-2.1?key=` + process.env.apiKey + `&of=json&txt=` + projectData.TEXT + `&model=general%20&lang=en`
            }

            let res = await axios(config)

            console.log(res.status);
            console.log(config.json);
            console.log(process.env.apiKey);
            console.log(projectData.TEXT);
        }

        makeRequest();
        //export { makeRequest }

    */
    // end of setup axios
    //////////////////////////////////
});
//old code end