import axios from 'axios';
import React, { Component } from 'react'

const base_url="http://localhost:8080";

export class EmployeeService{

    getAllEmployee(){
        return axios.get(`${base_url}/employee/getEmployee`);
    }

    addEmployee(employee){
        return axios.post(`${base_url}/employee/addEmployee`,employee)
    }

    getEmployeeById(id){
        return axios.get(`${base_url}/employee/getEmployee/${id}`)
    }

    updateEmployee(id,employee){
        return axios.put(`${base_url}/employee/updateEmployee/${id}`,employee)
    }

    deleteEmployee(id){
        return axios.delete(`${base_url}/employee/deleteEmployee/${id}`)
    }
  
}

export default new EmployeeService();