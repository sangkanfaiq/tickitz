import axios from "axios";

const RegisterRequest = () => {
  return {
    type: "REGISTER_REQUEST",
  };
};

const RegisterSuccess = (data) => {
  return {
    type: "REGISTER_SUCCESS",
    payload: data,
  };
};

const RegisterError = (error) => {
  return {
    type: "REGISTER_ERROR",
    payload: error,
  };
};

export const AuthRegister = (formData) => {
  return (dispatch) => {
    dispatch(RegisterRequest());
    axios({
      method: "POST",
      url: "http://localhost:3006/api/v1/auth/register",
      data: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
      }
    })
      .then((res) => {
        dispatch(RegisterSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(RegisterError(err.response.data));
      });
  };
};
