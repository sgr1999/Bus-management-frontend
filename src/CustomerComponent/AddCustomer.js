import React, { useState,Fragment, useEffect } from 'react'
import "../EmployeeComponent/ListEmployee.css";
import AddEmployee from '../EmployeeComponent/AddEmployee'
import { Container} from 'react-bootstrap';
import ListCustomer from './ListCustomer';
import useForm from '../Hooks/useForm';
import useFormCustomer from '../Hooks/useFormCustomer';
import { useDispatch } from 'react-redux';
import { findUserCustomer } from '../reduxState/action';
import CustomerService from '../Services/CustomerService';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';



const AddCustomer = () => {

    const [customer, setCustomer]=useState([]);
    const [firstName,setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [userName, setUserName]=useState('');
    const [mobileNumber,setMobileNumber]=useState('');
    const [password, setPassword]=useState('');
    const [password1,setPassword1]=useState('');
    const [gender, setGender]= useState('');
    const [age, setAge]= useState('');
    const [heading,setHeading]=useState('');
    const navigate = useNavigate();

    const {customerId} = useParams();

    const formLogin=()=>{

    }

    const {handleChange, values,errors,getPasswordValue}=useFormCustomer(formLogin);
    const dispatch = useDispatch();

    const checkCustomerUser=(e)=>{
      dispatch(findUserCustomer(e.target.value))
    }
    
    
    const saveOrUpdateCustomer=(e)=>{

      e.preventDefault();
      const customer ={firstName,lastName,mobileNumber,userName,password,gender,age};

      if (customerId) {
       
        CustomerService.updateCustomer(customer,customerId).then((response)=>{
          toast.success("updated successfully!!",{
            position:toast.POSITION.TOP_CENTER
          })

          navigate("/customer-details")
        }).catch(error=>{
          console.log(error.response.data);
          toast.error("something went wrong",{
            position:toast.POSITION.TOP_CENTER
          })
        })
      }else{
        
        CustomerService.addCustomer(customer).then((response)=>{
          console.log(customer);
          toast.success("customer added successfully!!")
          navigate("/customer-details")
        },
        (error)=>{
          if (gender.length<=0) {
            toast.error("select gender")
            console.log("gender : ",customer.gender)
            console.log(customer)
          }
          else if(age.length<=0){
            toast.error("enter age")
            console.log("age : ",customer.age)
          }
          else{
            toast.error("something went wrong")
            console.log(error.response.data)
          }
        })
      }
    }

    useEffect(()=>{
      if (customerId) {
        setHeading("Update")
      }else{
        setHeading("Add")
      }

      CustomerService.getCustomerById(customerId).then((response)=>{
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setMobileNumber(response.data.mobileNumber);
        setUserName(response.data.userName);
        setGender(response.data.gender);
        setAge(response.data.age);
        setPassword(response.data.password);
        setPassword1(response.data.password);
        console.log(response.data)
      }).catch(error=>{
        console.log(error.response.data);
      })
    },[])

  return (
    <div>
    <Container style={{
    background: "rgb(253, 249, 249)"}}>

     <Fragment>
     <div className="vh-100 gradient-custom">
            <div className="container py-5 h-60">
              <div className="row justify-content-center align-items-center h-100">
                <div className="col-12 col-lg-3 col-xl-7">
                  <div className="card shadow-2-strong card-registration" style={{border: "15px"}}>
                    <div className="card-body p-4 p-md-5">
                      
                      <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">{heading} Customer Details</h3>
                      <form>
          
                        <div className="row">
                          <div className="col-md-6 mb-4">
          
                            <div className="form-outline">
                              <input type="text" 
                              name='firstName'
                              id="firstName" className="form-control form-control-lg" 
                              
                              value={firstName}
                              onChange={(e)=>{setFirstName(e.target.value);
                                handleChange(e);
                              }}
                              />
                              <label className="form-label" htmlFor="firstName">First Name</label>
                              {
                                errors.firstName && <p className='errorMessage'>{errors.firstName}</p>
                              }
                            </div>
          
                          </div>
                          <div className="col-md-6 mb-4">
          
                            <div className="form-outline">
                              <input type="text" 
                              name='lastName'
                              id="lastName" className="form-control form-control-lg" 
                              value={lastName}
                              onChange={(e)=>{setLastName(e.target.value);
                              handleChange(e)
                              }}
                              />
                              <label className="form-label" htmlFor="lastName">Last Name</label>
                              {
                                errors.lastName && <p className='errorMessage'>{errors.lastName}</p>
                              }
                            </div>
          
                          </div>
                        </div>
          
                        
          
                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
          
                            <div className="form-outline">
                              <input type="email" id="emailAddress" className="form-control form-control-lg" 
                              name='userName'
                              value={userName}
                              onChange={(e)=>{setUserName(e.target.value);
                              handleChange(e);
                              checkCustomerUser(e);
                              }}
                              />
                              <label className="form-label" htmlFor="emailAddress">Email</label>
                              {
                                errors.userName && <p className='errorMessage'>{errors.userName}</p>
                              }
                            </div>
          
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
          
                            <div className="form-outline">
                              <input type="tel" id="phoneNumber" className="form-control form-control-lg" 
                              name='mobileNumber'
                              value={mobileNumber}
                              onChange={(e)=>{setMobileNumber(e.target.value);
                              handleChange(e)
                              }}
                              />
                              <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                              {
                                errors.mobileNumber && <p className='errorMessage'>{errors.mobileNumber}</p>
                              }
                            </div>
          
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
          
                            <div className="form-outline">
                              <input type="password" id="emailAddress" className="form-control form-control-lg" 
                              name='password'
                              value={password}
                              onChange={(e)=>{setPassword(e.target.value);
                              handleChange(e);
                              getPasswordValue(e)
                              }}
                              />
                              <label className="form-label" htmlFor="emailAddress">Password</label>
                              {
                                errors.password && <p className='errorMessage'>{errors.password}</p>
                              }
                            </div>
          
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
          
                            <div className="form-outline">
                              <input type="password" id="phoneNumber" className="form-control form-control-lg" 
                              name='password1'
                              value={password1}
                              onChange={(e)=>{setPassword1(e.target.value);
                              handleChange(e)
                              }}
                              />
                              <label className="form-label" htmlFor="phoneNumber">Confirm Password</label>
                              {
                                errors.password1 && <p className='errorMessage'>{errors.password1}</p>
                              }
                            </div>
          
                          </div>
                        </div>
          
                        <div className="row">
                            <div className="col-md-6 mb-4">
            
                              <h6 className="mb-2 pb-1">Gender: </h6>
            
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  id="femaleGender"
                                  value="Female"
                                  onChange={(e)=>setGender(e.target.value)}
                                />
                                <label className="form-check-label" htmlFor="femaleGender">Female</label>
                              </div>
            
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="gender"
                                  id="maleGender"
                                  onChange={(e)=>setGender(e.target.value)}
                                  value="Male"
                                />
                                <label className="form-check-label" htmlFor="maleGender">Male</label>
                              </div>
            
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  name="gender"
                                  type="radio"
                                  id="otherGender"
                                  value="Other"
                                  onChange={(e)=>setGender(e.target.value)}
                                />
                                <label className="form-check-label" htmlFor="otherGender">Other</label>
                                
                              </div>
            
                            </div>

                            <div className="col-md-6">
                                <div className="form-outline">
                                  <input
                                    name="age"
                                    type="number"
                                    value={age}
                                    onChange={(e)=>setAge(e.target.value)}
                                    id="age"
                                    className="form-control form-control-lg"
                                  />
                                  <label className="form-label" htmlFor="age"
                                    >Age</label
                                  >
      
                                 </div>
                              </div>
                          </div>
          
                        <div className="mt-4 pt-2">
                          <input className="btn btn-primary btn-lg" type="submit" value="Submit" onClick={(e)=>saveOrUpdateCustomer(e)} />
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

export default AddCustomer