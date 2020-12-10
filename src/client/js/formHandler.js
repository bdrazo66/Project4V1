//import { text1 } from 'express';
//import { checkForName } from './nameChecker'



function handleSubmit(event) {
    event.preventDefault()
        //apiData();
        //sendData();
    let t = document.getElementById('name').value
    sendData({ word: t })












    // check what text was put into the form field
    console.log("::: Form Submitted :::")
        // try to fetch from server so i will disable this part of code 
        /*  async function apiData() {
              const apiKey = "363d32428fa3d785d0167f968921e203";
              let formText = document.getElementById('name').value

              await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&txt=${formText}&model=general%20&lang=en`)
                  .then(res => res.json())
                  .then(data => {
                      res => res.json()


                      const t = data.sentence_list[0].text
                      console.log(t);



                      const f = data.confidence
                      console.log(f);



                      const g = data.agreement
                      console.log(g);



                      sendData({ TEXT: t, confidence: f, agree: g })

                      updateUI();


                  })


              .then(() => {





              });




          }*/
        //end of trying to fetch from server experment 


    async function sendData(data) {

        try {

            const request = await fetch('http://localhost:8585/a', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(data),
                mode: 'cors'

            });

            const response = await request.json();
            updateUI();

        } catch (error) {
            console.log('/a throw this', error);
            const text1 = document.getElementById('results')
            text1.innerHTML = "there was an error, /a throw this";
            //conf.innerHTML = "there was an error, /a throw this";
            //agree.innerHTML = "there was an error, /a throw this";


        };

    };





    async function updateUI() {
        const request = await fetch('http://localhost:8585/g')
        const data = await request.json();



        try {

            //const data = await request.json();


            const text1 = document.getElementById('results');
            text1.innerHTML = "Text is   : " + data.TEXT;
            const conf = document.getElementById('results2');
            conf.innerHTML = "confidence mark is   :   " + data.Confidence;
            const agree = document.getElementById('results1');
            agree.innerHTML = "agreement or disagreement   :  " + data.Agree;
            console.log(data);
            console.log(data.TEXT);
            console.log(data.Confidence);
            console.log(data.Agree);

        } catch (error) {
            console.log("error3", error);
            const text1 = document.getElementById('results')
            text1.innerHTML = "there was an error, /a throw this";
            const conf = document.getElementById('results2')
            conf.innerHTML = "there was an error, /a throw this";
            const agree = document.getElementById('results1')
            agree.innerHTML = "there was an error, /a throw this";

        }
    };











}





export { handleSubmit }
//export { sendData }
//export { updateUI }
//export { apiData }