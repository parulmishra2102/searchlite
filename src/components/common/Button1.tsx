import React from "react"; /*  */
import Button from "@mui/material/Button";

const Button1 = (props:any ) => {
  return (
    <div>
      <Button
        variant="contained"
        style={{
          marginTop: "10px",
          backgroundColor: "purple",
          color: "white",
          width: "147px",
          margin: "5px",
          
        }}
        onClick={props.onClick}
      >
        {props.children}
      </Button>
    </div>
  );
};

export default Button1;
