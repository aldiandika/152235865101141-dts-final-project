import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PokeSearch = () => {
  const navigate = useNavigate();

  const [listGen, setListGen] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://pokeapi.co/api/v2/generation/",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        // console.log(res.data.results);
        let raw = res.data.results;
        setListGen(raw);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box className="search-container">
      <Box className="inner-search-container" sx={{ gap: 1 }}>
        {listGen.map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: "1",
              height: "3em",
              backgroundColor: "#386A7B",
              color: "white",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              padding: "6px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate(`/generation/${index}?url=${item.url}`);
            }}
          >
            {item.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PokeSearch;
