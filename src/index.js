import "./styles.css";
import { validateEmail, validateCountry, validateZip, validatePassword, validatePassword2} from "./greeting.js";

const form = document.getElementById('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const invalidInputs = document.querySelectorAll(".invalid");


    if(invalidInputs.length > 0){
        alert(`Still invalid inputs: ${invalidInputs.length}`);
        e.preventDefault();
    }
});


email.addEventListener("blur", validateEmail);
country.addEventListener("blur", validateCountry);
zip.addEventListener("blur", validateZip);
password.addEventListener("blur", validatePassword);
password2.addEventListener("blur", validatePassword2);


