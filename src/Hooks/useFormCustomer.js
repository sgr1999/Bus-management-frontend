import React from 'react'

const useFormCustomer = () => {

    const [values, setValues]= useState({});
    const [errors, setErrors] = useState({});
    const [customer, setCustomer] = useState([]);
    
    const handleChangeCustomer =(event)=>{
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event,name,val)

        setValues({
            ...values,
            [name]:val,
        })
    }

   const validate=(event,name,values)=>{
       switch(name){
           case "userName":
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
              else {
                let newObj = omit(errors, "userName");
                setErrors(newObj);
              }
              break;
       }
   }

  return {
    values,
    errors,
    handleChangeCustomer,

  }
}

export default useFormCustomer