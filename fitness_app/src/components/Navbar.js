/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import { Stack } from "@mui/material";
import { Link } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "122px",
          sx: "40px",
        },
        mt: {
          sm: "32px",
          sx: "20px",
        },
        justifyContent: "none",
      }}
      px="20px"
      gap="40px"
      fontSize="24px"
      alignItems="center"
    >
      <Link
        to="/"
        alt="logo"
        style={{
          width: "48px",
          height: "48px",
          margin: "0 20px",
        }}
      >
        <img src={Logo} />{" "}
      </Link>{" "}
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="center">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home{" "}
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Exercises{" "}
        </a>{" "}
      </Stack>{" "}
    </Stack>
  );
};

export default Navbar;
