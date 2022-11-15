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

export const addBookTocartAPI = (id) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id.product_id}`, id,header);
    return response;
    console.log("add to beg")
}

export const addWishList = (id) => {
    let response = axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id.product_id}`,id, header);
    return response;
}
export const displayBooksFromWishlists = () => {
    let response = axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items",header);
    return response;
}
export const displayBooksFromCart = () => {
    let response = axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items",header);
    return response;
}
export const removeBookFromCart = (id) => {
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id.cartItem_id }`,header);
    console.log(header,"header coming from data vservuce")
    return response;
    
}
export const itemQuantityInBeg = (id,quantity) => {
    let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`,quantity,header);
    return response;
}
export const removeBookFromWhislist = (id) => {
    let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${id.product_id}`,header);
    return response;
}

