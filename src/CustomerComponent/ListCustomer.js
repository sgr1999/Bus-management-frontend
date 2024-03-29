import React, { useEffect, useState } from 'react'
import ListEmployee from '../EmployeeComponent/ListEmployee'
import "./ListCustomer.css"
import { Card, Form } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FormControl } from 'react-bootstrap'
import NavBarCustomer from './NavBarCustomer'
import CustomerService from '../Services/CustomerService'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state'
import { getCustomerData } from '../reduxState/action'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ListCustomer = () => {

    const [customer, setCustomer] = useState([]);
    const [query, setQuery] = useState({});

    const dispatch = useDispatch();

    dispatch(getCustomerData(customer));

    useEffect(()=>{
        getCustomerAll();
    },[])

    const deleteCustomer=(id)=>{
      CustomerService.deleteCustomer(id).then((response)=>{
        toast.success("customer deleted successfully!!",{
          position:toast.POSITION.TOP_CENTER
        })
        getCustomerAll();
      }).catch(error=>{
        console.log(error.response.data)
        toast.error("not deleted")
      })
    }

    const onChangeHandler=(e)=>{
      setQuery(e.target.value);
      console.log(e.target.value);
    }

    const getCustomerAll=()=>{
        CustomerService.getCustomerAll().then((response)=>{
            setCustomer(response.data);
            console.log(response.data);
        },
        (error)=>{
            console.log(error.response.data);
        })
    }

  

  return (
    <div className="container">
      <br />
      <br />
      <thead>
        <tr>
          <th>
            <h2 className="text-center">List Of Customer</h2>
          </th>
        </tr>
      </thead>
      <tr className="search-emp">
        <th>
             <NavBarCustomer/>
        </th>

        <th style={{width:"20%",background: "#212529"}}>
        <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Enter Id"
                className="me-1"
                aria-label="Search"
                onChange={onChangeHandler}
              />
            </Form>
        </th>
      </tr>


      <Card>
        <table className="table table-bordered table-striped">
          <thead className="text-center">
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Action</th>
          </thead>
          <tbody>

        
            {
            customer.filter((e)=>
            e.firstName.toLowerCase().includes(query)
            ).map((customer) =>(
              <tr key={customer.customerId}>
                <td>{customer.customerId}</td>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.mobileNumber}</td>
                <td>{customer.userName}</td>
                <td>{customer.gender}</td>
                <td>{customer.age}</td>
                <td>
                
                  <Link className='btn btn-info' to={`/update-customer/${customer.customerId}`} >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pen"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg>
                  </Link>

                  <button
                    className="btn btn-danger" 
                    onClick={() => deleteCustomer(customer.customerId)} style={{marginLeft:"20px"}}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default ListCustomer