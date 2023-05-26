import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const registerDataSchema = {
  fullName: "",
  photoURL: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const useRegister = () => {
  const [registerData, setRegisterData] = useState(registerDataSchema);
  const [errors, setErrors] = useState(registerDataSchema);
  const { generalSignUp } = useAuth();

  // validate user registration input
  useEffect(() => {
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        registerData.email
      ) &&
      registerData.email !== ""
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is not valid",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  }, [registerData.email]);

  useEffect(() => {
    if (
      !/^.{6,}$/.test(registerData.password) &&
      registerData.password !== "" &&
      registerData.confirmPassword !== ""
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is less than 6 characters",
      }));
    } else {
      if (
        registerData.password !== registerData.confirmPassword &&
        registerData.password !== "" &&
        registerData.confirmPassword !== ""
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: "Password doesn't match",
          confirmPassword: "Password doesn't match",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: "",
          password: "",
        }));
      }
    }
  }, [registerData.password, registerData.confirmPassword]);

  // update registerData on change of input value
  const handleRegisterData = (event) => {
    const newRegisterData = {
      ...registerData,
      [event.target.name]: event.target.value,
    };
    setRegisterData(newRegisterData);
  };

  // register user in general way
  const registerUser = (event) => {
    event.preventDefault();
    // check empty fields
    if (registerData.email === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email can't be empty",
      }));
    }
    if (registerData.password === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password can't be empty",
      }));
    }
    if (registerData.confirmPassword === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Password can't be empty",
      }));
    }

    // register use if there is no error.
    else if (
      registerData.email !== "" &&
      registerData.password !== "" &&
      registerData.confirmPassword !== "" &&
      Object.values(errors).every((error) => error === "")
    ) {
      console.log("test");
      const {
        fullName: { value: userFullName },
        email: { value: userEmail },
        photoURL: { value: userPhotoURL },
        password: { value: userPassword },
      } = event.target;
      generalSignUp(userEmail, userPassword, userFullName, userPhotoURL);
    }
  };
  return { registerData, handleRegisterData, registerUser, errors };
};

export default useRegister;
