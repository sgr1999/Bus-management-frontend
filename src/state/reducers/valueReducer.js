const reducer = (state=0,action)=>{
    if(action.type==='getCustomer'){
        return action.payload
    }
    else{
        return state;
    }
}

export default reducer