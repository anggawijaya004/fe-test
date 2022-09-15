import React from "react";
import Container from "@mui/material/Container";
import Form from "../components/Form";
import Divider from "@mui/material/Divider";
import ListUser from "../components/ListUser";

export default function MainPage() {
  return (
    <Container maxWidth="lg" sx={{ pt: "48px" }}>
      <Form />
      <Divider sx={{ my: "62px" }} />
      <ListUser />
    </Container>
  );
}
