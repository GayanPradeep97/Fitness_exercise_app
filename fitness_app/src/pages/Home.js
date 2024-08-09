/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchExersices from "../components/SearchExersices";
import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExersices />
      <Exercises />
    </Box>
  );
};

export default Home;
