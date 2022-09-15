import { useState } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextInput from "./input/TextInput";
import PasswordInput from "./input/PasswordInput";
import PhoneInput from "./input/PhoneInput";
import ButtonForm from "./ButtonForm";
import { useDispatch } from "react-redux";
import { addUser, getUsers } from "../store/actions";

export default function Form() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    img: "",
    fullname: "",
    email: "",
    dob: "",
    address: "",
    phone: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput((inp) => ({ ...inp, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(addUser(input));
  };

  const generate = () => {
    dispatch(getUsers());
  };

  const cancel = () => {
    setInput({
      img: "",
      fullname: "",
      email: "",
      dob: "",
      address: "",
      phone: "",
      password: "",
    });
  };

  return (
    <Container maxWidth="md" sx={{ pt: "33px" }}>
      <form onSubmit={submit}>
        <Stack spacing={3}>
          <div>
            <Typography fontSize={24} fontWeight={500}>
              Personal information
            </Typography>
            <Typography color="#6B7280" fontSize={14} fontWeight={300}>
              This information will be displayed publicly so be careful what you
              share.{" "}
            </Typography>
          </div>
          <TextInput
            label="Full Name"
            placeholder="Your Name"
            value={input.fullname}
            onChange={onChangeInput}
            name="fullname"
          />
          <TextInput
            type="email"
            label="Email address"
            placeholder="yourmail@mail.com"
            value={input.email}
            onChange={onChangeInput}
            name="email"
          />
          <TextInput
            type="date"
            label="Date of Birth"
            placeholder="dd/mm/yy"
            value={input.dob}
            onChange={onChangeInput}
            name="dob"
          />
          <TextInput
            width="100%"
            label="Street Address"
            placeholder="dd/mm/yy"
            value={input.address}
            onChange={onChangeInput}
            name="address"
          />
          <PhoneInput
            label="Phone Number"
            placeholder="dd/mm/yy"
            value={input.phone}
            onChange={onChangeInput}
            name="phone"
          />
          <PasswordInput
            value={input.password}
            onChange={onChangeInput}
            name="password"
          />
          <Divider sx={{ mb: "20px" }} />
          <ButtonForm generate={generate} cancel={cancel} />
        </Stack>
      </form>
    </Container>
  );
}
