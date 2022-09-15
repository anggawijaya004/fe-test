import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function TextInput({
  width,
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div  style={{ width: width || 504 }}>
      <Typography fontWeight={500} fontSize={14}>
        {label}
      </Typography>
      <TextField
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        size="small"
        placeholder={placeholder}
        fullWidth
      />
    </div>
  );
}
