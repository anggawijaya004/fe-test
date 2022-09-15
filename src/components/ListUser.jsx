import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "./input/SearchInput";
import empty from "../Images/empty.svg";
import { Box, Stack } from "@mui/material";
import Card from "./Card";
import { clearUsers } from "../store/actions";

export default function ListUser() {
    const dispatch = useDispatch()
  const data = useSelector((state) => state.data.users);
  
  const clear = () => {
    dispatch(clearUsers())
  }
  return (
    <>
      <Box position='relative'>
        <div className="cont-btn-clear">
          <button onClick={clear} className={data.length === 0 ? "btn-clear-none" : "btn-clear"}>
            Clear All List User
          </button>
        </div>
      </Box>
      <SearchInput />
      {data.length === 0 ? (
        <Box display="flex" justifyContent="center">
          <img src={empty} />
        </Box>
      ) : (
        <Stack direction="row" spacing={3} flexWrap="wrap" mt="48px">
          {data.map((e, i) => (
            <Card key={i} data={e} />
          ))}
        </Stack>
      )}
    </>
  );
}
