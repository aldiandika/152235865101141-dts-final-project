import { Box, Card } from "@mui/material";

const PokeBasicInfo = ({ pokeWeight, pokeHeight, pokeBaseEXP }) => {
  return (
    <>
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          fontWeight: "bold",
          color: "white",
        }}
      >
        Basic Info
      </Box>

      <Card
        sx={{
          minWidth: "12sem",
          minHeight: "3em",
          marginTop: 1,
          padding: 2,
          boxShadow: 3,
          borderRadius: "12px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "space-between",
            paddingY: 0.5,
          }}
        >
          <Box sx={{ flex: 1.5, fontWeight: 600, color: "#ACACAC" }}>
            Weight{" "}
          </Box>
          <Box sx={{ flex: 3, fontWeight: 600, color: "#56525C" }}>
            {pokeWeight && Math.round(pokeWeight * 10) / 100} Kg
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "space-between",
            paddingY: 0.5,
          }}
        >
          <Box sx={{ flex: 1.5, fontWeight: 600, color: "#ACACAC" }}>
            Height{" "}
          </Box>
          <Box sx={{ flex: 3, fontWeight: 600, color: "#56525C" }}>
            {pokeHeight && Math.round(pokeHeight * 10) / 100} m
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "space-between",
            paddingY: 0.5,
          }}
        >
          <Box sx={{ flex: 1.5, fontWeight: 600, color: "#ACACAC" }}>
            Base EXP{" "}
          </Box>
          <Box sx={{ flex: 3, fontWeight: 600, color: "#56525C" }}>
            {pokeBaseEXP}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default PokeBasicInfo;
