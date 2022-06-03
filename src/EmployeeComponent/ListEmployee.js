import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../Services/EmployeeService";
import "./ListEmployee.css";
import { Card } from "react-bootstrap";
import { Button } from "bootstrap";
import NavBarEmployee from "./NavBarEmployee";



const ListEmployee = (props) => {
  const [employee, setEmployee] = useState([]);
  


  useEffect(() => {
    getAllEmployee();
  }, []);


  const getAllEmployee = () => {
    EmployeeService.getAllEmployee()
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const deleteEmployee = (id) => {
    console.log(id);
    EmployeeService.deleteEmployee(id)
      .then((response) => {
        getAllEmployee();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const getData=(data)=>{
    console.log("comming in list ",data);

    setEmployee(employee.filter((c)=>c.empId ==data));
    console.log(employee);
  }

  return (
    <div className="container">
      <br />
      <br />
      <thead>
        <tr>
          <th>
            <h2 className="text-center">List Of Employee</h2>
          </th>
        </tr>
      </thead>
              <NavBarEmployee onSubmit={getData}/>

      <Card>
        <table className="table table-bordered table-striped">
          <thead className="text-center">
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Employee Type</th>
            <th>Action</th>
          </thead>
          <tbody>
            {employee.map((employee) => (
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.mobileNumber}</td>
                <td>{employee.userName}</td>
                <td>{employee.employeeType}</td>
                <td>
                
                  <Link className='btn btn-info' to={`/update-employee/${employee.empId}`} >
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
                    onClick={() => deleteEmployee(employee.empId)} style={{marginLeft:"20px"}}
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
  );
};

export default ListEmployee;