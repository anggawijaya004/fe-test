import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";

export default function PasswordInput({ width, value, onChange, name }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ width: width || 504 }}>
      <Typography fontWeight={500} fontSize={14}>
        Password
      </Typography>
      <TextField
        placeholder="********"
        size="small"
        name={name}
        fullWidth
        type={showPassword ? "text" : "password"}
        id="password"
        autoComplete="current-password"
        helperText="Minimum of 6 characters, with upper & lower case, a number and a symbol."
        value={value}
        onChange={onChange}
        InputProps={{
          autocomplete: "new-password",
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
