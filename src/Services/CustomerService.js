import axios from 'axios';
import React from 'react'

const base_url="http://localhost:8080/customer";

export class CustomerService{
 
    getCustomerAll(){
        return axios.get(`${base_url}/getCustomer`);
    }
}

export default new CustomerService();