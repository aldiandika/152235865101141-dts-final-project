import {
  CardActionArea,
  Box,
  CardMedia,
  Hidden,
  CardContent,
} from "@mui/material";
import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PokeballBG from "../assets/pokeball.webp";

const PokeListCard = ({ pokeUrl, pokeName }) => {
  const navigate = useNavigate();
  const [cardColor, setCardColor] = useState("#FFFFFF");
  const [pokeID, setPokeID] = useState();

  const changeCardColor = (color) => {
    setCardColor(color);
  };

  useEffect(() => {
    axios({
      method: "get",
      url: pokeUrl,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        let rawData = res.data;
        setPokeID(rawData.id);
        // console.log(rawData.types[0].type.name);
        if (rawData.types[0].type.name === "grass") {
          changeCardColor("#64D0B0");
        } else if (rawData.types[0].type.name === "water") {
          changeCardColor("#91CAF9");
        } else if (rawData.types[0].type.name === "fire") {
          changeCardColor("#EB696B");
        } else if (rawData.types[0].type.name === "electric") {
          changeCardColor("#F9D86E");
        } else if (rawData.types[0].type.name === "ice") {
          changeCardColor("#98D8D8");
        } else if (rawData.types[0].type.name === "fighting") {
          changeCardColor("#C03028");
        } else if (rawData.types[0].type.name === "poison") {
          changeCardColor("#A040A0");
        } else if (rawData.types[0].type.name === "ground") {
          changeCardColor("#E0C068");
        } else if (rawData.types[0].type.name === "flying") {
          changeCardColor("#91B2E5");
        } else if (rawData.types[0].type.name === "psychic") {
          changeCardColor("#F2888B");
        } else if (rawData.types[0].type.name === "bug") {
          changeCardColor("#93B11E");
        } else if (rawData.types[0].type.name === "rock") {
          changeCardColor("#C4B984");
        } else if (rawData.types[0].type.name === "ghost") {
          changeCardColor("#4A68B9");
        } else if (rawData.types[0].type.name === "dragon") {
          changeCardColor("#0063C3");
        } else if (rawData.types[0].type.name === "steel") {
          changeCardColor("#408B99");
        } else if (rawData.types[0].type.name === "dark") {
          changeCardColor("#56525C");
        } else if (rawData.types[0].type.name === "fairy") {
          changeCardColor("#E98CE1");
        } else if (rawData.types[0].type.name === "normal") {
          changeCardColor("#A8A878");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Card
        sx={{
          height: { xs: 100, sm: 100, md: 130, lg: 130 },
          elevation: 12,
          borderRadius: 4,
          backgroundColor: cardColor,
        }}
      >
        <CardActionArea
          onClick={() => {
            navigate(`/detail/${pokeID}`);
          }}
        >
          <Hidden lgUp>
            <Box
              sx={{
                postion: "relative",
              }}
            >
              <img
                src={PokeballBG}
                alt="Background"
                style={{
                  width: 150,
                  position: "absolute",
                  zIndex: 10,
                  top: 10,
                  left: 50,
                }}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <CardMedia
                component="img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`}
                alt="Pokemon"
                style={{
                  position: "absolute",
                  top: -30,
                  left: 55,
                  zIndex: 100,
                }}
              />
            </Box>
          </Hidden>

          <Hidden lgDown>
            <Box
              sx={{
                postion: "relative",
              }}
            >
              <img
                src={PokeballBG}
                alt="Background"
                style={{
                  width: 200,
                  position: "absolute",
                  zIndex: 10,
                  top: 10,
                  left: 120,
                }}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <CardMedia
                component="img"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`}
                alt="Pokemon"
                style={{
                  width: 200,
                  position: "absolute",
                  top: -30,
                  left: 140,
                  zIndex: 100,
                }}
              />
            </Box>
          </Hidden>

          {/*Card Content Name */}
          <Box
            component={CardContent}
            sx={{
              position: "absolute",
              top: -5,
              left: -5,
              zIndex: 120,
            }}
          >
            <Typography
              fontSize={{ xs: 14, sm: 14, md: 18, lg: 18 }}
              sx={{
                fontWeight: 600,
                color: "white",
                textTransform: "capitalize",
              }}
            >
              {pokeName}
            </Typography>
          </Box>
          <Box
            component={CardContent}
            sx={{
              position: "absolute",
              top: 15,
              left: -5,
              zIndex: 120,
            }}
          >
            <Typography
              fontSize={{ xs: 14, sm: 14, md: 18, lg: 18 }}
              sx={{
                fontWeight: 600,
                color: "white",
                textTransform: "capitalize",
              }}
            >
              #{pokeID}
            </Typography>
          </Box>
        </CardActionArea>
      </Card>
    </>
  );
};

export default PokeListCard;
