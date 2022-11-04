import axios from "axios";

let header = {
    headers:{
        Authorization : localStorage.getItem('token')
    }
}

export const getBooks = () => {
    let response = axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book", header);
    return response;
}
