import React, { Fragment, useEffect, useState} from "react";
import { ToastContainer } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FormGroup,Form, Input, Container, Button } from "reactstrap";
import EmployeeService from "../Services/EmployeeService";
import ListEmployee from "./ListEmployee";

const AddEmployee = () => {

    const [firstName, setFirstName]= useState('');
    const [lastName, setLastName]= useState('');
    const [mobileNumber, setMobileNumber]= useState('');
    const [userName, setUserName]= useState('');
    const [password, setPassword]= useState('');
    const [password1, setPassword1]= useState('');
    const [employeeType, setEmployeeType]= useState('');


    const {empId} = useParams();
    const navigate = useNavigate();

    const saveOrUpdateEmployee=(e)=>{

        e.preventDefault();
        
        setEmployeeType("Driver");
        const employee ={firstName,lastName,mobileNumber,userName,password,employeeType}

        if(empId){
            EmployeeService.updateEmployee(empId,employee).then(
                (response)=>{
                    console.log(response.data);
                    navigate("/employee-details")
                    toast.success("updated successfully")
                }
            ).catch(error=>{
                toast.error("something went wrong")
                console.log(error.response.data);
            })
        }
        else{
            EmployeeService.addEmployee(employee).then(
                (response)=>{
                    console.log(response.data)
                    navigate("/employee-details")
                    toast.success("employee added successfully")
                }
            ).catch(error=>{
                toast.error("something went wrong")
                console.log(error.response.data)
            })
        }

    }

    useEffect(()=>{
        console.log(empId);
        EmployeeService.getEmployeeById(empId).then(

            
            (response)=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setMobileNumber(response.data.mobileNumber);
                setUserName(response.data.userName);
                setPassword(response.data.password);
                setEmployeeType(response.data.employeeType);
            }
        ).catch(error=>{
            console.log(error.response.data);
            console.log("id not get")
        })
    },[])

  return (
    <div>
        <Container style={{background:"#b6b9b8"}}>

         <Fragment>
         <div className="vh-100 gradient-custom">
                <div className="container py-5 h-60">
                  <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-3 col-xl-7">
                      <div className="card shadow-2-strong card-registration" style={{border: "15px"}}>
                        <div className="card-body p-4 p-md-5">
                          <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Employee Details</h3>
                          <form>
              
                            <div className="row">
                              <div className="col-md-6 mb-4">
              
                                <div className="form-outline">
                                  <input type="text" id="firstName" className="form-control form-control-lg" 
                                  
                                  value={firstName}
                                  onChange={(e)=>setFirstName(e.target.value)}
                                  />
                                  <label className="form-label" htmlFor="firstName">First Name</label>
                                </div>
              
                              </div>
                              <div className="col-md-6 mb-4">
              
                                <div className="form-outline">
                                  <input type="text" id="lastName" className="form-control form-control-lg" 
                                  value={lastName}
                                  onChange={(e)=>setLastName(e.target.value)}
                                  />
                                  <label className="form-label" htmlFor="lastName">Last Name</label>
                                </div>
              
                              </div>
                            </div>
              
                            
              
                            <div className="row">
                              <div className="col-md-6 mb-4 pb-2">
              
                                <div className="form-outline">
                                  <input type="email" id="emailAddress" className="form-control form-control-lg" 
                                  
                                  value={userName}
                                  onChange={(e)=>setUserName(e.target.value)}
                                  />
                                  <label className="form-label" htmlFor="emailAddress">Email</label>
                                </div>
              
                              </div>
                              <div className="col-md-6 mb-4 pb-2">
              
                                <div className="form-outline">
                                  <input type="tel" id="phoneNumber" className="form-control form-control-lg" 
                                  
                                  value={mobileNumber}
                                  onChange={(e)=>setMobileNumber(e.target.value)}
                                  />
                                  <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                                </div>
              
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-6 mb-4 pb-2">
              
                                <div className="form-outline">
                                  <input type="password" id="emailAddress" className="form-control form-control-lg" 
                                  
                                  value={password}
                                  onChange={(e)=>setPassword(e.target.value)}
                                  />
                                  <label className="form-label" htmlFor="emailAddress">Password</label>
                                </div>
              
                              </div>
                              <div className="col-md-6 mb-4 pb-2">
              
                                <div className="form-outline">
                                  <input type="password" id="phoneNumber" className="form-control form-control-lg" 
                                  
                                  value={password1}
                                  onChange={(e)=>setPassword1(e.target.value)}
                                  />
                                  <label className="form-label" htmlFor="phoneNumber">Confirm Password</label>
                                </div>
              
                              </div>
                            </div>
              
                            <div className="row">
                              <div className="col-12">
              
                                <select className="select form-control-lg">
                                  <option value="1" disabled>Select</option>
                                  <option value="Driver" onChange={(e)=>setEmployeeType(e.target.value)}>Driver</option>
                                  <option value="Condactor" onChange={(e)=>setEmployeeType(e.target.value)}>Condactor</option>
                                  <option value="Other" onChange={(e)=>setEmployeeType(e.target.value)}>Other</option>
                                </select>
                                <label className="form-label select-label">Employee Type</label>
              
                              </div>
                            </div>
              
                            <div className="mt-4 pt-2">
                              <input className="btn btn-primary btn-lg" type="submit" value="Submit" onClick={(e)=>saveOrUpdateEmployee(e)} />
                            </div>
              
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </Fragment>
        </Container>

    </div>
  )
}

export default AddEmployee