import React, { useState } from 'react'
import AddEmployee from '../EmployeeComponent/AddEmployee'

const AddCustomer = () => {

    const [customer, setCustomer]=useState([]);

    const [firstName,setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [userName, setUserName]=useState('');
    const [mobileNumber,setMobileNumber]=useState('');
    const [password, setPassword]=useState('');
    const [password1,setPassword1]=useState('');
    const [gender, setGenger]= useState('');
    
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

export default AddCustomer