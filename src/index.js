import "./styles.css";
import { validateEmail, validateCountry, validateZip, validatePassword, validatePassword2} from "./greeting.js";

const form = document.getElementById('form');
const button = document.getElementById('btnsubmit')
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const validInputs = document.querySelectorAll(".valid");
    const array_valid_inputs = [...validInputs];

    array_valid_inputs.forEach(input => {
        input.checkValidity();
        input.classList.add("submitted");
    });

    const invalidInputs = document.querySelectorAll(".invalid");
    const array_bad_inputs = [...invalidInputs];    

    array_bad_inputs.forEach(input => {
        input.checkValidity();
        input.classList.add("submitted");
    });
    

    if(invalidInputs.length > 0){
        alert(`Still invalid inputs: ${invalidInputs.length}`);
        
        array_bad_inputs.forEach(input => {
            console.log(input);
        });
        e.preventDefault();
    } else {
        alert("Valid form. High Five!");
        array_bad_inputs.forEach(input => {
            input.className = "";
            input.value = "";
        });

        array_valid_inputs.forEach(input => {
            input.className = "";
            input.value = "";
        });
    }
});


email.addEventListener("blur", validateEmail);
country.addEventListener("blur", validateCountry);
zip.addEventListener("blur", validateZip);
password.addEventListener("blur", validatePassword);
password2.addEventListener("blur", validatePassword2);


