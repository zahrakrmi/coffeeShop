import React from "react";
import { Alert } from "@mui/material";

export default function CustomAlertBox({ showAlert, severity, message }) {
  if (!showAlert) return null;

  return (
    <Alert
      sx={{
        height: "50px",
        width: "300px",
        position: "absolute",
        top: "500px",
        right: "10px",
      }}
      className="md:top-[100px]"
      severity={severity}
    >
      {message}
    </Alert>
  );
}