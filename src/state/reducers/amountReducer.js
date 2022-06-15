

// const reducer = (state=0, action)=>{
//     if (action.type==='deposit') {
//         return state + action.payload
//     }
//     else if (action.type==='withdraw') {
//         return state - action.payload
//     }
//     else{
//         return state;
//     }
// }

const reducer = (state=0, action)=>{
    if (action.type==='deposit') {
        return action.payload
    }
    else if (action.type==='withdraw') {
        return state - action.payload
    }
    else if(action.type==='value'){
        return action.payload
    }
    else{
        return state;
    }
}



export default reducer;