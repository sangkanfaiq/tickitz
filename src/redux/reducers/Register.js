const initialState = {
    loading: false,
    data: {},
    error: null,
    isRegister: false,
  };
  
  const Register = (state=initialState, action={})=> {
      switch (action.type) {
          case "REGISTER_REQUEST":
              return {...state, loading: true}
          case "REGISTER_ERROR":
              return {...state, loading: false, data: state.data, error: action.payload, isRegister:false}
          case "REGISTER_SUCCESS":
              return {...state, loading: false, data: action.payload, error: null, isRegister: true}
          default:
              return state
      }
  } 
  
  export default Register;
  