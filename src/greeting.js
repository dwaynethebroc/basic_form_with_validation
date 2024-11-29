import { validate } from "webpack";

// greeting.js
const form = document.getElementById('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const emailError = document.querySelector("#email + div.error");
const countryError = document.querySelector("#country + div.error");
const zipError = document.querySelector("#zip + div.error");
const passwordError = document.querySelector("#password + div.error");
const password2Error = document.querySelector("#password2 + div.error");

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const countryPattern = /^[a-zA-Z]+$/;
const zipPattern = /^\d{5}(?:[-\s]\d{4})?$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const password2Pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const validateEmail = function(){
    console.log("validate email");

    if (email.value.trim() === "") {
        setError(email, emailError, "Please enter a valid email");
        return false;
    } else if(!emailPattern.test(email.value)){
        setError(email, emailError, "Please enter a valid email");
        return false;
    } else {
        emailError.innerText = ""
        setSuccess(email, emailError);
        return true;
    }
}

export const validateCountry = function(){
    console.log("validate country");

    if (country.value.trim() === "") {
        setError(country, countryError, "Please enter a valid country");
        return false;
    } else if(!countryPattern.test(country.value)){
        setError(country, countryError, "Please enter a valid country");
        return false;
    } else {
        setSuccess(country, countryError);
        return true;
    }
}

export const validateZip = function(){
    console.log("validate zip");

    if (zip.value.trim() === "") {
        setError(zip, zipError, "Please enter a valid zip code");
        return false;
    } else if(!zipPattern.test(zip.value)){
        setError(zip, zipError, "Please enter a valid zip code");
        return false;
    } else {
        setSuccess(zip, zipError);
        return true;
    }
}

export const validatePassword = function(){
    console.log("validate password");

    if (password.value.trim() === "") {
        setError(password, passwordError, "Please enter a valid password. Must include: Minimum eight characters, at least one uppercase letter, one lowercase letter and one number");
        return false;
    } else if(!passwordPattern.test(password.value)){
        setError(password, passwordError, "Please enter a valid password. Minimum eight characters, at least one uppercase letter, one lowercase letter and one number");
        return false;
    } else {
        setSuccess(password, passwordError);
        return true;
    }
}

export const validatePassword2 = function(){
    console.log("validate password2");

    if (password2.value.trim() === "") {
        setError(password2, password2Error, "Please enter a valid password2. Minimum eight characters, at least one uppercase letter, one lowercase letter and one number");
        return false;
    } else if(!password2Pattern.test(password2.value)){
        setError(password2, password2Error, "Please enter a valid password2. Minimum eight characters, at least one uppercase letter, one lowercase letter and one number");
        return false;
    } else if (password2.value === password.value){
        setError(password2, password2Error, "Passwords do not match")
        return false;
    } else {
        setSuccess(password2, password2Error);
        return true;
    }
}

export const setError = function(input, errorElement, message){
    input.classList.add("invalid");
    input.classList.remove("valid");
    errorElement.innerText = message;
}

export const setSuccess = function(input, errorElement){
    input.classList.add("valid");
    input.classList.remove("invalid")
    errorElement.innerText = '';
}
