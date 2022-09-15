import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function PhoneInput({ width, label, name, value, onChange }) {
  return (
    <div style={{ width: width || 504 }}>
      <Typography fontWeight={500} fontSize={14}>
        {label}
      </Typography>
      <TextField
        size="small"
        name={name}
        placeholder="e.g 813 2811 2993"
        fullWidth
        type="text"
        value={value}
        onChange={onChange}
        InputProps={{
          startAdornment: <InputAdornment position="start">+62</InputAdornment>,
        }}
      />
    </div>
  );
}
