import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function SearchInput({ value, onChange }) {
  return (
    <TextField
      size="small"
      placeholder="Search Anything"
      sx={{ width: "286px" }}
      type="text"
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
