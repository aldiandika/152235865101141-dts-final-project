import { Box, Typography } from "@mui/material";

const PokeTypeTag = ({ pokeType }) => {
  return (
    <>
      <Box
        sx={{
          width: "25%",
          marginLeft: 0.5,
        }}
      >
        <div className="poke-type">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.7em",
                fontWeight: 900,
                textTransform: "capitalize",
                color: "white",
              }}
            >
              {pokeType}
            </Typography>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default PokeTypeTag;
