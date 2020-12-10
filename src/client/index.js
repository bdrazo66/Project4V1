//import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler';


import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/resets.scss';
const submit = document.querySelector('.submit');

submit.addEventListener('click', e => {

    handleSubmit(e);
    //makeRequest();




});




//console.log(checkForName);

//alert("I EXIST")
//console.log("CHANGE!!");