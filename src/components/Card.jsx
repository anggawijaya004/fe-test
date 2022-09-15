import { Avatar, Typography, Box, Divider, Grid, Stack } from "@mui/material";
import { Sms, UserTag, Calendar, Map, Mobile, Lock } from "iconsax-react";
import { useState } from "react";
import moment from "moment";
import "../css/card.css";

export default function Card({ data }) {
  const [navAct, setNavAct] = useState(0);

  const hoverNav = (i) => {
    setNavAct(i);
  };

  const nav = [
    {
      key: "fullname",
      label: "Hi, My name is",
      icon: (
        <UserTag
          variant="Outline"
          size="24"
          color={navAct === 0 ? "#E54B41" : "#4B5563"}
        />
      ),
    },
    {
      key: "email",
      label: "Hi, My email address is",
      icon: (
        <Sms
          variant="Outline"
          size="24"
          color={navAct === 1 ? "#E54B41" : "#4B5563"}
        />
      ),
    },
    {
      key: "dob",
      label: "Hi, My birthday is",
      icon: (
        <Calendar
          variant="Outline"
          size="24"
          color={navAct === 2 ? "#E54B41" : "#4B5563"}
        />
      ),
    },
    {
      key: "address",
      label: "Hi, My address is",
      icon: (
        <Map
          variant="Outline"
          size="24"
          color={navAct === 3 ? "#E54B41" : "#4B5563"}
        />
      ),
    },
    {
      key: "phone",
      label: "Hi, My phone number is",
      icon: (
        <Mobile
          variant="Outline"
          size="24"
          color={navAct === 4 ? "#E54B41" : "#4B5563"}
        />
      ),
    },
    {
      key: "password",
      label: "Hi, My password is",
      icon: (
        <Lock
          variant="Outline"
          size="24"
          color={navAct === 5 ? "#E54B41" : "#4B5563"}
        />
      ),
    },
  ];

  return (
    <div className="card">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt="32px"
        pb="36px"
      >
        <Avatar src={data.img ?? ""} sx={{ width: "128px", height: "128px" }} />
        <Typography fontWeight={300} fontSize={14} mb="4px" mt="24px">
          {nav[navAct].label ?? "-"}
        </Typography>
        <Typography fontWeight={500} fontSize={20}>
          {nav[navAct].key === "dob"
            ? data[nav[navAct].key]
              ? moment(data[nav[navAct].key]).format("DD/MM/YYYY")
              : "-"
            : data[nav[navAct].key] ?? "-"}
        </Typography>
      </Box>
      <Divider />
      <Box display="flex">
        {nav.map((e, i) => (
          <Box
            item
            key={i}
            position="relative"
            sx={{ cursor: "pointer" }}
            onMouseEnter={() => hoverNav(i)}
          >
            {navAct === i && <div className="div-act"></div>}
            <Box p="16px 12px">{e.icon}</Box>
          </Box>
        ))}
      </Box>
    </div>
  );
}
