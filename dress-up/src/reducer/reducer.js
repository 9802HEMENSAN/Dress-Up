 
  
export  const ProductReducer=(state,action)=>{
    console.log("state",state);
    console.log("action",action.type)
    switch(action.type){
      case "FETCH_LOADING":{
        return {
           ...state,
           isLoading:true
        }
      }
      case "FETCH_SUCCESS":{
        return {
           ...state,
           products:action.payload,
           isLoading:false,
           isErr: false,
        }
      }
      case "FETCH_FAILURE":{
        return {
           products:[],
           isLoading:false,
           isErr:  true,
        }
      }
      default : 
        throw new Error()
    }
  }
  