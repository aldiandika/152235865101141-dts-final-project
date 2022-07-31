import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PokemonList from "./Pokemon_list";

const Homepage = () => {
  return (
    <>
      <Box className="root-container">
        <Navbar />
        <Box className="inner-container">
          {/* Pokemon List  */}
          <PokemonList />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Homepage;
