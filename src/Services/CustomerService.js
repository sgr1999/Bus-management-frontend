import axios from 'axios';
import React from 'react'

const base_url="http://localhost:8080/customer";

export class CustomerService{
 
    addCustomer(customer){
        return axios.post(`${base_url}/addCustomer`,customer);
    }

    getCustomerAll(){
        return axios.get(`${base_url}/getCustomer`);
    }

    getCustomerById(id){
        return axios.get(`${base_url}/getCustomer/${id}`)
    }

    updateCustomer(customer,id){
        return axios.put(`${base_url}/updateCustomer/${id}`,customer);
    }

    deleteCustomer(id){
        return axios.delete(`${base_url}/deleteCustomer/${id}`)
    }
}

export default new CustomerService();