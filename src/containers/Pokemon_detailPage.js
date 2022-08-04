import { Box, Container, Fab } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import PokeTypeTag from "../components/poke_type_tag";
import PokeballIC from "../assets/pokeball-icon.webp";

import NameAndTypeComp from "../components/name_n_type_component";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PokeBasicInfo from "../components/Poke_basic_info";
import PokeAbility from "../components/Poke_ability_info";
import { useDispatch } from "react-redux";
import { saveRoute } from "../reducers/PokeDataSlice";

const PokemonDetailPage = () => {
  let param = useParams();
  let pokeID = param.id;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [pokeData, setPokeData] = useState({});
  const [bgColor, setBgColor] = useState("greenyellow");

  // Pokemon Data
  const [pokeType, setPokeType] = useState([]);

  const defineBgColor = (type) => {
    if (type === "grass") {
      setBgColor("#64D0B0");
    } else if (type === "water") {
      setBgColor("#91CAF9");
    } else if (type === "fire") {
      setBgColor("#EB696B");
    } else if (type === "electric") {
      setBgColor("#F9D86E");
    } else if (type === "ice") {
      setBgColor("#98D8D8");
    } else if (type === "fighting") {
      setBgColor("#C03028");
    } else if (type === "poison") {
      setBgColor("#A040A0");
    } else if (type === "ground") {
      setBgColor("#E0C068");
    } else if (type === "flying") {
      setBgColor("#91B2E5");
    } else if (type === "psychic") {
      setBgColor("#F2888B");
    } else if (type === "bug") {
      setBgColor("#93B11E");
    } else if (type === "rock") {
      setBgColor("#C4B984");
    } else if (type === "ghost") {
      setBgColor("#4A68B9");
    } else if (type === "dragon") {
      setBgColor("#0063C3");
    } else if (type === "steel") {
      setBgColor("#408B99");
    } else if (type === "dark") {
      setBgColor("#56525C");
    } else if (type === "fairy") {
      setBgColor("#E98CE1");
    } else if (type === "normal") {
      setBgColor("#A8A878");
    }
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `https://pokeapi.co/api/v2/pokemon/${pokeID}/`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        // console.log(res.data);
        let rawData = res.data;
        if (res.status === 200) {
          setPokeData(rawData);
          setPokeType(rawData.types);
          defineBgColor(rawData.types[0].type.name);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pokeID]);

  return (
    <>
      <Box className="root-container">
        <Navbar />
        <Box className="inner-container">
          <Container
            maxWidth="lg"
            sx={{
              padding: "2em",
              backgroundColor: "#386A7B",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <div className="poke-image-container">
              <div className="poke-image" style={{ backgroundColor: bgColor }}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`}
                  alt="Pokemon"
                />
              </div>
            </div>

            <Box sx={{ flex: 2, paddingLeft: "2em" }}>
              <NameAndTypeComp pokeName={pokeData.name} poke_ID={pokeID} />

              {/* Type */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  paddingLeft: "2em",
                  paddingRow: "2em",
                  paddingTop: "1em",
                  paddingBottom: "1.5em",
                }}
              >
                {pokeType.map((item, id) => (
                  <PokeTypeTag key={id} pokeType={item.type.name} />
                ))}
              </Box>

              {pokeData ? (
                <>
                  <PokeBasicInfo
                    pokeWeight={pokeData.weight}
                    pokeHeight={pokeData.height}
                    pokeBaseEXP={pokeData.base_experience}
                  />
                  <br />
                  <PokeAbility pokeAbi={pokeData.abilities} />
                </>
              ) : (
                <>
                  <PokeBasicInfo
                    pokeWeight="no-data"
                    pokeHeight="no-data"
                    pokeBaseEXP="no-data"
                  />
                  <br />
                  <PokeAbility />
                </>
              )}
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Button Catch */}
      <Fab
        className="btn-fab"
        sx={{
          width: "6em",
          height: "6em",
          position: "fixed",
          bottom: "4vh",
          right: "4vh",
          backgroundColor: "white",
        }}
        onClick={() => {
          dispatch(
            saveRoute({
              route: `/catch-pokemon/${pokeID}?name=${pokeData.name}`,
            })
          );
          navigate(`/catch-pokemon/${pokeID}?name=${pokeData.name}`);
        }}
      >
        <img alt="catch-poke" src={PokeballIC} width="200em" />
      </Fab>

      <Footer />
    </>
  );
};

export default PokemonDetailPage;
