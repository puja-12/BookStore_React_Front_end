import axios from "axios";

export const signUp = async (signupObj) => {
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration" , signupObj);
    return response;
}

export const login = async (loginObj) => {
    let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login", loginObj);
    return response;
}