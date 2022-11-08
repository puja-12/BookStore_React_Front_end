import axios from "axios";

let header = {
    headers:{
        'x-access-token' : localStorage.getItem('token')
    }
}

export const getBooks = () => {
    let response = axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book", header);
    return response;
}

export const addBookTocart = (id) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`, id,header);
    return response;
}

export const addWishList = (id) => {
    let response = axios.get(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`,id, header);
    return response;
}

