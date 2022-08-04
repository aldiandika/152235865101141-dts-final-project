import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPokeListGen } from "../reducers/PokeListSlice";
import PokeListGenComponent from "../components/PokeList_gen_component.js";

const PokemonListGen = () => {
  const dispatch = useDispatch();
  const [query, setQueryParam] = useSearchParams();
  let pokeUrl = query.get("url");

  useEffect(() => {
    dispatch(getPokeListGen(pokeUrl));
  }, []);

  return (
    <>
      <Box className="root-container">
        <Navbar />
        <Box className="inner-container">
          <PokeListGenComponent />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default PokemonListGen;
