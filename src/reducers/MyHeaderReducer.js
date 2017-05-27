const initialState = {
    locale:null
}

const MyButtonReducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case 'C':
        return {
            locale: action.payload
        };
        case 'E':
        return {
            locale: action.payload
        };
        default:
        return state;
    }
    
}

export default MyButtonReducer