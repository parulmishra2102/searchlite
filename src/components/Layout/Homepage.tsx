import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { Formik, Form, Field, useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//import { Submit } from "./Submit";
interface MyFormValues {
  password: string;
}
export const Homepage = () => {
  let errorMessage: string = "";

  const [password, setPassword] = useState(null as any);
  const navigate = useNavigate ()
  const initialValues: MyFormValues = { password: "" };
  const submitHandler = () => {
    if (!password) {
      errorMessage = "This field can not be empty";
    } else if (password.length > 2) {
      navigate('/firstscreen');
      
      console.log(password);
    } else {
      errorMessage = "Password length should be greater than 2";
    }
    let error: any = document.getElementById("errorMessage");
    error.style.display = "bold";
    error.style.color = "red";
    error.innerText = errorMessage;
  };
  return (
    <>
      <div>
        <h3 style={{ color: "blue" }}>To enter please provide password:</h3>
        <h6>password*</h6>
        <Formik initialValues={initialValues} onSubmit={submitHandler}>
          <Form>
            <div>
              <TextField
                id="outlined-basic"
                type="password"
                label=""
                variant="outlined"
                style={{ width: "250px" }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <small id="errorMessage"></small>
            </div>

            <Button
              type="submit"
              color="success"
              style={{ 
                marginTop: "10px",
                backgroundColor: "purple",
                color: "white",
              }}
            >
              Submit
            </Button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
