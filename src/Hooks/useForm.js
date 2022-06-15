import React, { useEffect, useState } from "react";
import { omit } from "lodash";
import "../EmployeeComponent/ListEmployee.css";
import EmployeeService from "../Services/EmployeeService";
import CustomerService from "../Services/CustomerService";
import { useSelector } from "react-redux";

const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [password,setPassword] = useState({});
  const [employee, setEmployee] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [emailValue, setEmailValue] = useState([]);

 
  const userNameCustomer = useSelector((state)=>state.findUser);
  const userLength = userNameCustomer.length;
  console.log("out if user length : ",userLength)
  console.log("out if user : ",userNameCustomer)

  useEffect(()=>{
    getAllEmployee();
    getCustomerAll();
    console.log("employee : ",employee);
  },[])

  const getAllEmployee=()=>{
    EmployeeService.getAllEmployee()
    .then((response)=>{
      setEmployee(response.data);
    })
    .catch((error)=>{
      console.log(error.response.data);
    })
  };

  const getCustomerAll=()=>{

    CustomerService.getCustomerAll().then((response)=>{
      console.log(response.data)
      setCustomer(response.data)
    }).catch(error=>{
      console.log(error.response.data)
    })
  }

  const getPasswordValue =(event)=>{
    event.persist();
    setPassword(event.target.value);
  }

  const handleChange = (event) => {
    event.persist();
    
    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    setValues({
      ...values, // spread operator to store old values
      [name]: val,
    });
  };

  const handleSubmit=(event)=>{
      if (event) event.preventDefault()
      
      if(Object.keys(errors).length === 0 && Object.keys(values).length !==0) {

        callback();
        alert("There is an Error!");
      }
      else{
        alert("There is an Error!");
      }
  } 

  const validate = (event, name, values) => {
    switch (name) {
      case "firstName":
        if (values.length <= 2) {
          setErrors({
            ...errors,
            firstName: "name is invalid",
          });
        } else {
          console.log(event.target.value);
          let newObj = omit(errors, "firstName");
          setErrors(newObj);
        }
        break;

      case "lastName":
        if (values.length <= 2) {
          setErrors({
            ...errors,
            lastName: "name is invalid",
          });
        } else {
          let newObj = omit(errors, "lastName");
          setErrors(newObj);
        }
        break;

      case "userName":
        console.log("in if user length : ",userLength)
        console.log("in if user : ",userNameCustomer)
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(values)
        ) {
          setErrors({
            ...errors,
            userName: "Enter a valid email address",
          });
        }
        else if(employee.filter((e)=>e.userName==values).length>0 && userNameCustomer.length==0){
          setErrors({
            ...errors,
            userName: "Already registred"
          });
        }
        else if(customer.filter((e)=>e.userName==values).length>0){
          setErrors({
            ...errors,
            userName: "Already registred"
          })
        }
        else {
          let newObj = omit(errors, "userName");
          setErrors(newObj);
        }
        break;

       


        case "mobileNumber":
          if (values.length!=10) {
            setErrors({
              ...errors,
              mobileNumber:"mobile number is invalid",
            });
          }else{
            let newObj = omit(errors,"mobileNumber")
            setErrors(newObj);
          }
          break;

      case "password":
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(
            values
          )
        ) {
          setErrors({
            ...errors,
            password:
              "Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers",
          });
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
        }
        break;

        case "password1":
            if (values!=password) {
              setErrors({
                ...errors,
                password1:
                "Password not matched",
              });
            }else{
              let newObj = omit(errors,"password1");
              setErrors(newObj);
            }
          break;  

      default:
        break;
    }
  };

  return {
    values,
    errors,
    handleChange,
    getPasswordValue,
    handleSubmit
  };
};

export default useForm;
