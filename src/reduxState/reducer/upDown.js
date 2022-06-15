export const changeTheNumber =(state = 0,action)=>{
    switch(action.type){
        case "getCustomer": return action.payload;
        default: return state;
    }
}

export const findUser=(state=0,action)=>{
    switch(action.type){
        case "userCustomer": return action.payload;
        default: return state;
    }
}